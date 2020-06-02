import { Component, OnInit, Input } from '@angular/core';
import { CompountType } from './model/compoundType';
import { CompoundContentComponent } from './content/compound-content/compound-content.component';
import {
  NameInformation,
  CompanyInformation,
  AddressInformation,
} from './model/information.model';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Required } from 'src/app/shared/decoratos';

@Component({
  selector: 'gc-compound-field',
  templateUrl: './compound-field.component.html',
  styleUrls: ['./compound-field.component.scss'],
})
export class CompoundFieldComponent implements OnInit {
  /**
   * Usage:
   * <gc-compound-field [type]="'name'"></gc-compound-field>
   *
   */

  /**
   * Form control attached to input field. [Required]
   * All validations must be configurated at control level, according to
   * reactive forms docs.
   * @see {@link https://angular.io/guide/form-validation#reactive-form-validation}
   *
   * @required Throws an Error if control is undefined
   * @input Angular input
   * @type {FormControl}
   * @memberof CompoundFieldComponent
   */
  @Required
  @Input()
  public control: FormControl;

  // public inputControl = new FormControl();

  /**
   * Setup input field in order to apply predefined masks or be displayed as textarea
   *
   * @type {CompountType}
   * @memberof CompoundFieldComponent
   */
  @Input()
  public set type(value: CompountType) {
    if (value != undefined) {
      this.compountType = value;
    }
  }

  public get type(): CompountType {
    return this.compountType;
  }

  private compountType: CompountType;

  public Model: any;

  public text: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.getTitle();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CompoundContentComponent, {
      width: '592px',
      data: this.Model,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        switch (result.type) {
          case CompountType.Name:
            {
              this.Model = new NameInformation();
              this.text =
                result.name.value +
                ' ' +
                result.surname.value +
                ' ' +
                result.secondSurname.value;
            }
            break;
          case CompountType.Information:
            {
              this.Model = new CompanyInformation();
              this.text = result.company.value + ' ' + result.assistance.value;
            }
            break;
          case CompountType.Address:
            {
              this.text = result.address.value + ' ' + result.cp.value;
              this.Model = new AddressInformation();
            }
            break;
        }
        this.Model = result;
      }
    });
  }

  getTitle() {
    switch (this.compountType) {
      case CompountType.Information:
        {
          this.text = 'shared.compound_field.enum_information_show';
          this.Model = new CompanyInformation();
        }
        break;
      case CompountType.Address:
        {
          this.text = 'shared.compound_field.enum_address_show';
          this.Model = new AddressInformation();
        }
        break;
      default:
        {
          this.text = 'shared.compound_field.enum_name_show';
          this.Model = new NameInformation();
        }
        break;
    }
  }
}
