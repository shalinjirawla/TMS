import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeriesGenerationOperationComponent} from './series-generation-operation.component';
import {SeriesGenerationOperationRoutingModule} from './series-generation-operation-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        SeriesGenerationOperationRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        SeriesGenerationOperationComponent,
    ]
})
export class SeriesGenerationOperationModule{}