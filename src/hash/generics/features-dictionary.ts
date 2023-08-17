export class FeaturesDictionary {
  _keys: Set<string>;
  _mappedKeys: string[];

  constructor() {
    this._keys = new Set();
    this._mappedKeys = [];
  }

  add(...keys: string[]) {
    for (const key of keys) {
      this._keys.add(key);
    }
  }

  setMappedKeys(keys: string[]) {
    if (!keys.every((key) => this._keys.has(key))) {
      // console.log(keys.filter((key) => !this._keys.has(key)));
      throw new Error(`Some keys are not in dictionary`);
    }
    this._mappedKeys = keys;
  }

  keys() {
    return this._mappedKeys.length ? this._mappedKeys : Array.from(this._keys.values()).sort();
  }
}