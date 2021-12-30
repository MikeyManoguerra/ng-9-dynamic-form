const names = [
  'Provide',
  'Choose',
  'Info',
  'Tell',
  'Describe',
  'Rate'
]


const inputTypes = [
  'the-input',
  'the-text-area',
  'the-select'
]


export class DataField {
  name: string;
  value: string = '';
  inputType: string;
  slug: string;

  constructor() {
    this.name = names[Math.floor(names.length * Math.random())];
    this.inputType = inputTypes[Math.floor(inputTypes.length * Math.random())];
    this.slug = `${this.name}-${this.inputType}-${Math.floor(10_000 * Math.random())}`.toLowerCase();
  }
}
