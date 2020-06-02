import { Component, Input } from '@angular/core';
import { Tab } from './models/tab.model';
import { MatDialog } from '@angular/material/dialog';
import { TabDialogComponent } from './dialog/tab-dialog/tab-dialog.component';

@Component({
  selector: 'gc-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  /**
    * Usage:
    * <gc-tabs [tabs]="tabs"> </gc-tabs>
    * 
    * 
    *   public tabs: Tab[];
    *   this.tabs = [
            new Tab(ContentComponent, 'Comp1 View', 'fab fa-angular', true, true),
            new Tab(ContentComponent, 'Comp2 View', 'fab fa-angular', true, true),
        ];
    */

  public tabTypeDefault = '';

  tabList = new Array<Tab>();

  public selectedTab: number;

  // ****************************************** Inputs

  @Input() set tabs(values: Array<Tab>) {
    if (values.length > 0) {
      this.tabList = values;
    }
  }

  @Input() set tabType(value: string) {
    if (value != '') {
      this.tabTypeDefault = value;
    }
  }
  get tabType() {
    return this.tabTypeDefault;
  }

  constructor(public dialog: MatDialog) {}

  public removeTab(index: number): void {
    const dialogRef = this.dialog.open(TabDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tabList.splice(index, 1);
      }
    });
  }

  tabChanged(event) {
    this.selectedTab = event.index;
  }
}
