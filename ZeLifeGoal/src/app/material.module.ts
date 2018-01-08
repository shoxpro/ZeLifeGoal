import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatProgressSpinnerModule, 
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatProgressSpinnerModule, 
        MatCardModule
    ]
})

export class MaterialModule { }