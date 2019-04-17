export class Category {
  name: string;
  subcategories: string[];

  constructor(name) {
    this.name = name;
    this.subcategories = [];
  }
}
