import { HTMLElement } from '../../parse/html';
import { FeaturesDictionnary } from './features-dictionnary';

export class HTMLHasher {
  dictionnary!: FeaturesDictionnary;
  values!: Map<string, number>;

  constructor() {
    this.reset();
  }

  reset() {
  }

  compute() {
    // Compute the values if not already done
  }

  childHandler(_child: HTMLElement) {
    // Handle a child element
  }

  parentHandler(_parent: HTMLElement) {
    // Handle a parent element
  }

  hash() {
    this.compute();
    if (!(this.values instanceof Map)) throw new Error('Values not computed');
    if (!(this.dictionnary instanceof FeaturesDictionnary)) throw new Error('Dictionnary is not defined');

    return this.dictionnary.keys().map((key: any) => (this.values as Map<string, number>).get(key) || 0);
  }
}