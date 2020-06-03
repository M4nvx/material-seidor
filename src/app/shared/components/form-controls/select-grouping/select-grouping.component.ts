import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { takeUntil, take } from 'rxjs/operators';

interface OptionGroup {
  disabled?: boolean;
  icon: string;
  value?: string;
  viewValue: string;
  children: OptionGroup[];
}

@Component({
  selector: 'app-select-grouping',
  templateUrl: './select-grouping.component.html',
  styleUrls: ['./select-grouping.component.css'],
})
export class SelectGroupingComponent implements OnInit {
  public activeLang = 'es';

  // list of any
  optionlist: OptionGroup[] = [];

  /** control for the selected option */
  public selectControl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public filterControl: FormControl = new FormControl();

  /** list of option filtered by search keyword */
  public filteredOptions: ReplaySubject<OptionGroup[]> = new ReplaySubject<
    OptionGroup[]
  >(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private onDestroy = new Subject<void>();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    this.getValues();

    // load the initial option list
    this.filteredOptions.next(this.optionlist.slice());

    // listen for search field value changes
    this.filterControl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  getChildren(value: OptionGroup): boolean {
    if (value.children.length > 0) {
      return true;
    }
    return false;
  }

  // FILTER

  /**
   * Sets the initial value after the filteredOptions are loaded initially
   */
  private setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this.onDestroy))
      .subscribe(
        () =>
          (this.singleSelect.compareWith = (a: OptionGroup, b: OptionGroup) =>
            a.value === b.value)
      );
  }

  private filterOptions() {
    if (!this.optionlist) {
      return;
    }

    let search = this.filterControl.value;

    const optGroupsCopy = this.copyOptionGroups(this.optionlist);
    if (!search || search.length < 3) {
      this.filteredOptions.next(optGroupsCopy);
      return;
    } else {
      search = search.toLocaleLowerCase();
    }

    this.filteredOptions.next(
      optGroupsCopy.filter((oG) => {
        const showList = oG.viewValue.toLocaleLowerCase().indexOf(search) > -1;
        if (!showList) {
          oG.children = oG.children.filter(
            (g) => g.viewValue.toLocaleLowerCase().indexOf(search) > -1
          );
        }
        return oG.children.length > 0;
      })
    );
  }

  protected copyOptionGroups(groups: OptionGroup[]) {
    const optionGroupsCopy = [];
    groups.forEach((g) => {
      optionGroupsCopy.push({
        viewValue: g.viewValue,
        children: g.children.slice(),
      });
    });
    return optionGroupsCopy;
  }

  getValues(): void {
    this.optionlist = [
      {
        viewValue: 'Tree item 1',
        icon: 'home',
        children: [
          {
            icon: 'home',
            value: 'bulbasaur-0',
            viewValue: 'Tree item 1a',
            children: [],
          },
          {
            icon: 'home',
            value: 'Tree-1b',
            viewValue: 'Tree item 1b',
            children: [],
          },
          {
            icon: 'home',
            value: 'Tree-1c',
            viewValue: 'Tree item 1c',
            children: [
              {
                icon: 'home',
                viewValue: 'Tree item 1c1',
                children: [],
              },
              {
                icon: 'home',
                viewValue: 'Tree iem 1c2',
                children: [],
              },
            ],
          },
        ],
      },
      {
        viewValue: 'Tree item 2',
        icon: 'home',
        children: [
          {
            icon: 'home',
            value: 'squirtle-10',
            viewValue: 'Tree item 2a',
            children: [],
          },
          {
            icon: 'home',
            value: 'psyduck-11',
            viewValue: 'Tree item 2b',
            children: [],
          },
          {
            icon: 'home',
            value: 'horsea-12',
            viewValue: 'Tree item 2c',
            children: [],
          },
        ],
      },
      {
        viewValue: 'Tree item 3',
        icon: 'home',
        children: [
          { icon: 'home', value: 'mew-14', viewValue: 'Mew', children: [] },
          {
            icon: 'home',
            value: 'mewtwo-15',
            viewValue: 'Mewtwo',
            children: [],
          },
        ],
      },
    ];
  }
}
