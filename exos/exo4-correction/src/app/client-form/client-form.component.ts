import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  imports: [ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit{
  clientForm: FormGroup = new FormGroup({});
  @Output() onSave: EventEmitter<Client> = new EventEmitter<Client>();
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(/\d{5}/i)]]
    })
  }

  onSubmit() {
    let client: Client = this.clientForm.value;
    this.onSave.emit(client);
    this.clientForm.reset();
  }
}
