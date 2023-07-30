import { linkKeyValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkKeyValuePattern('rel', 'modulepreload')
])
