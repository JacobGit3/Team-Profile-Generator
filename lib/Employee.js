class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  get Name() {
    return this.name;
  }
  get Id() {
    return this.id;
  }
  get email() {
    return this.email
  }
}