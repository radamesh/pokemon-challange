export class Pokemons {
  count: number;
  next: string;
  previous: boolean;
  results:SubArray;

  constructor(
    count: number,
    next: string,
    previous: boolean,
    results: SubArray
  ) {
    this.count = count
    this.next = next
    this.previous = previous
    this.results = results
  }
}