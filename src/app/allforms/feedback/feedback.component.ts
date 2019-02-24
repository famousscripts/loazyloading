import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: [`
   input.ng-touched.ng-invalid {
     border: 1px solid #ff3a00;
   }
  `]
})
export class FeedbackComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    console.log(form.control.value.firstName);
    form.resetForm();

  }

  formReset(form: NgForm) {
    form.resetForm();
  }

}