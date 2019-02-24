import { FeedbackComponent } from './feedback/feedback.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllformsRoutingModule } from './allforms-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    AllformsRoutingModule,
    FormsModule
  ]
})
export class AllformsModule { }
