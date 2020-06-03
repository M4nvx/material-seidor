import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { PortalModule } from '@angular/cdk/portal';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSpinner } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ObserversModule } from '@angular/cdk/observers';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectSearchModule } from './components/form-controls/select-grouping/mat-select-search/mat-select-search.module';

@NgModule({
  imports: [],
  exports: [
    MatRippleModule,
    MatTreeModule,
    MatBadgeModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ObserversModule,
    ScrollingModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTabsModule,
    PortalModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatSlideToggleModule,
    ObserversModule,
    MatExpansionModule,
    MatStepperModule,
    MatRadioModule,

    // Mat-select-search
    MatSelectSearchModule,
  ],
  providers: [MatDatepickerModule],
})
export class AppMatModule {}
