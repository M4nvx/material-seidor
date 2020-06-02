import { CompountType } from './compoundType';
import { FormControl, Validators } from '@angular/forms';

export class NameInformation {
  public name: FormControl = new FormControl('', Validators.required);

  public surname: FormControl = new FormControl('', Validators.required);

  public secondSurname: FormControl = new FormControl('', Validators.required);

  public type: CompountType = CompountType.Name;
}

export class CompanyInformation {
  public company: FormControl = new FormControl('', Validators.required);

  public assistance: FormControl = new FormControl('', Validators.required);

  public type: CompountType = CompountType.Information;
}

export class AddressInformation {
  public address: FormControl = new FormControl('', Validators.required);

  public cp: FormControl = new FormControl('', Validators.required);

  public type: CompountType = CompountType.Address;
}
