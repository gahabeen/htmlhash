import { HTMLElement } from '../../parse/html';
import { HTMLHash } from './html-hash';

export class HTMLHasher {
  hash!: HTMLHash;

  constructor() {
    this.reset();
  }

  reset() {
    // Reset the instance to be reused (for memory efficiency)
  }

  childHandler(_child: HTMLElement) {
    // Handle a child element
  }

  parentHandler(_parent: HTMLElement) {
    // Handle a parent element
  }

  compute(): HTMLHash {
    // Compute the values if not already done
    return this.hash
  }

  // hash() {
  //   return this._hash;

  //   if (!(this.values instanceof Map)) throw new Error('Values not computed');
  //   if (!(this.dictionary instanceof FeaturesDictionary)) throw new Error('Dictionary is not defined');

  //   return this.dictionary.keys().map((key: any) => (this.values as Map<string, number>).get(key) || 0);
  // }
}