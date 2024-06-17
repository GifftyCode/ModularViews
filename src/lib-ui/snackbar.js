class Snackbar {
  constructor() {
    this.snackbar = document.createElement('div');
  }
  init() {
    this.snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(this.snackbar);
  }
}

export { Snackbar as default };
