import { tagKeyValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyValuePattern('script', 'type', 'application/json')
])
