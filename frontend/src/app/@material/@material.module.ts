import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule, MatNativeDateModule, MatSidenavModule, MatListModule, MatRadioModule ,
  MatExpansionModule, MatSnackBarModule , MatTabsModule
} from '@angular/material';

let material = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule,MatNativeDateModule, MatSidenavModule, MatListModule,MatRadioModule ,
  MatExpansionModule , MatSnackBarModule , MatTabsModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class materialModule { }
