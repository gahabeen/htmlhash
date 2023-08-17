import { HTMLHasher } from '../generics/html-hasher';

// Use all references (ids, classes, refs) in HTML as features

export class HTMLReferencesHasher extends HTMLHasher {
  constructor() {
    super();
  }
}