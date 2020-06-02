import { Type } from '@angular/core';

export class Tab {
  public id: number;

  public title: string;

  public icon: string;

  public active: boolean;

  public component: Type<any>;

  public isRemovable: boolean;

  public isEnabled: boolean;

  constructor(
    component: Type<any>,
    title: string,
    icon: string,
    isRemovable: boolean,
    isEnabled: boolean
  ) {
    this.component = component;
    this.title = title;
    this.icon = icon;
    this.isRemovable = isRemovable;
    this.isEnabled = isEnabled;
  }
}
