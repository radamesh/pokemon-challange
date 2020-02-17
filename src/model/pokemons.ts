export class Pokemons {
  count: number;
  next: string;
  previous: boolean;
  results: Array<any>;

  constructor(
    count: number,
    next: string,
    previous: boolean,
    results: Array<any>
  ) {
    this.count = count
    this.next = next
    this.previous = previous
    this.results = results
  }
}