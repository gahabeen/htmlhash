import { regexPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  regexPattern('<!--[^>]+W3 Total Cache')
])
