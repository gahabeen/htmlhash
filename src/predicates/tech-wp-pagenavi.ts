import { tagKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyLooseValuePattern('link', 'href', 'wp-pagenavi'),
])