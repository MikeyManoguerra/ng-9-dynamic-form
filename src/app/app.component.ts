import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormField } from './models/form-field';
import { DataField } from './models/data-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-component-loader';

  @ViewChild('theForm') theForm: NgForm;

  formSubmission: { [key: string]: DataField; } = {};

  onSubmit() {
    console.log(this.theForm);
    console.log(this.formSubmission)
  }

  ngOnInit(): void {

    // this isnt strictly necessasary but it reproesents that we would need to transform
    // what comes from and what goes to the api into and out of a FormField class (the one that defines the component type)
    this.fields.forEach(field => {
      const slug = field.slug;
      this.formSubmission[slug] = field.field;
    })
  }

  fields: FormField[] = [
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
    new FormField(new DataField()),
  ]
}
