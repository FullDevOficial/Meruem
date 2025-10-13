import { NgModule } from '@angular/core';

// Modules actually used in the project
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Only export what's actually being used
const MaterialModules = [
  MatButtonModule,
  MatProgressSpinnerModule, // Used in CustomButton
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatCheckboxModule,
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialModule {}
