export class EmptyListError extends Error {
  constructor() {
    super('Empty List')
    this.name = 'EmptyListError'
  }
}
