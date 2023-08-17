import { compare } from '../../cluster';
import { HashVector } from '../../types';
import { FeaturesDictionary } from './features-dictionary';

export class HTMLHash {
  dictionary!: FeaturesDictionary;
  values!: Map<string, number>;

  constructor(options?: Partial<HTMLHash> & { vector?: HashVector }) {
    const {
      dictionary = new FeaturesDictionary(),
      values = new Map(),
      vector = []
    } = options || {};

    this.dictionary = dictionary;

    if (vector.length) {
      const keys = dictionary.keys();
      for (const [index, value] of vector.entries()) {
        this.values.set(keys[index], value);
      }
    } else {
      this.values = values;
    }
  }

  vector() {
    return this.dictionary.keys().map((key: any) => (this.values as Map<string, number>).get(key) || 0);
  }

  compare(hash: HTMLHash) {
    return compare(this.vector(), hash.vector());
  }
}