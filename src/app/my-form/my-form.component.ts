import { FormatWidth } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { minDateValidator } from '../dateValidator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact:  ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]),
  });
  constructor(private fb: FormBuilder) {};
  onSubmit():void {
    console.log('orderForm submitted : ', this.orderForm.value);
  }

  addPayments() {
    const paymentForm = this.fb.group({
      date: ['', [Validators.required, minDateValidator(new Date())]],
      amount: ['', Validators.required]
    });
    const payments = this.orderForm.get('payments') as FormArray;
    payments.push(paymentForm);
  }

  ngOnInit() {
    this.orderForm.valueChanges
    .subscribe(value => {
      console.log('orderForm value changes : ', value);
    });
  }

  get payments(): FormArray {
    return this.orderForm.get('payments') as FormArray;
  }
}
