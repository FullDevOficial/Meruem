import { NgModule } from '@angular/core';

// Modules actually used in the project
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

// Only export what's actually being used
const MaterialModules = [
  MatButtonModule,
  MatProgressSpinnerModule, // Used in CustomButton
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  imports: MaterialModules,
  exports: MaterialModules,
})
export class MaterialModule {}
