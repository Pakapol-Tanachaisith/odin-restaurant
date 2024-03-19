class Page {
  name;
  create = () => {};
  index = false;

  constructor({ name, create, index = false }) {
    this.name = name;
    this.index = index;
    this.create = create;
  }
}

export default Page;
