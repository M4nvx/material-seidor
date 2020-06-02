import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Tab } from '../shared/components/layouts/tabs/models/tab.model';
import { CompoundFieldComponent } from '../shared/components/layouts/compound-field/compound-field.component';
import { SelectRecursiveGroupingComponent } from '../shared/components/form-controls/select-recursive-grouping/select-recursive-grouping.component';
@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent implements OnInit {
  public activeLang = 'es';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }
  ngOnInit() {}
  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
