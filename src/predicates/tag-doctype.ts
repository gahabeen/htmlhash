import { linkKeyValuePattern, tagPattern, tagKeyValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagPattern('!doctype')
])
