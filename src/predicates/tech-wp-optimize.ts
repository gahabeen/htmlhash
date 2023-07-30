import { regexPattern, tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  regexPattern('<!--[^>]+Cached by WP-Optimize'),
])