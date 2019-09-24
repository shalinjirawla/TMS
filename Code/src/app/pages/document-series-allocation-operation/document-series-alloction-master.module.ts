import {NgModule} from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentSeriesAllocationOperationRoutingModule } from './document-series-allocation-master-routing-module';
import { DocumentSeriesAllocationOperationComponent } from "./document-series-allocation-operation.component";

@NgModule({
    imports:[
        CommonModule,
        DocumentSeriesAllocationOperationRoutingModule,
        ReactiveFormsModule,
    ],
    declarations:[
        DocumentSeriesAllocationOperationComponent,
    ]
})
export class DocumentSeriesAllocationOperationModule{}