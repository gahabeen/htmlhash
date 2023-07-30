import { linkKeyValuePattern, tagKeyPattern, tagKeyValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyPattern('!doctype')
])
