import { matchAny } from '../fp';
import { tagKeyValuePattern } from '../patterns';

export const predicate = matchAny([
  tagKeyValuePattern('form', 'method', 'get')
])
