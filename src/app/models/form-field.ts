import { Type } from "@angular/core";
import { TheInputComponent } from "../inputs/the-input.component";
import { TheSelectComponent } from "../inputs/the-select.component";
import { TheTextAreaComponent } from "../inputs/the-text-area.component";
import { DataField } from "./data-field";

const fieldTypes: { [key: string]: Type<any> } = { //probably type the component a little better
  'the-input': TheInputComponent,
  'the-text-area': TheTextAreaComponent,
  'the-select': TheSelectComponent,
}

// would want FormField.field to be a bare bones mapped type of some sort, so we can keep our inputs
// as versitile as possible.

export class FormField {
  slug: string;
  field: DataField;
  component: Type<any>

  constructor(private dataField: DataField) {
    this.field = dataField;
    this.component = fieldTypes[dataField.inputType]
    this.slug = this.field.slug;
  }
}

