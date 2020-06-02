import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

interface OptionGroup {
  disabled?: boolean;
  icon: string;
  value?: string;
  viewValue: string;
  children: OptionGroup[];
}

// interface Option {
//   icon: string;
//   value: string;
//   viewValue: string;
//   disabled?: boolean;
//   children: OptionGroup[];
// }

// interface OptionGroup {
//   disabled?: boolean;
//   icon: string;
//   viewValue: string;
//   children: Option[];
// }

@Component({
  selector: 'app-select-recursive-grouping',
  templateUrl: './select-recursive-grouping.component.html',
  styleUrls: ['./select-recursive-grouping.component.css'],
})
export class SelectRecursiveGroupingComponent implements OnInit {
  public activeLang = 'es';

  @ViewChild('searchBox', { static: false }) searchBox: ElementRef;
  @Input() control: FormControl;

  selectedItem: any;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    this.getValues();
  }

  pokemonControl = new FormControl();

  findSelectedItem(value: any): void {
    // if (this.groupBy) {
    //   this.selectedItem = this.options.reduce((option, options) => {
    //     const item = options[this.groupBy].find(
    //       (item) => item[this.optionValue] === value
    //     );
    //     if (item) {
    //       option = item;
    //     }
    //     return option;
    //   }, {});
    // } else {
    //   this.selectedItem = this.options.find((item) =>
    //     this.optionValue ? item[this.optionValue] === value : item === value
    //   );
    // }
  }

  // list of any
  recursivelist: OptionGroup[] = [];

  getValues(): void {
    this.recursivelist = [
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
