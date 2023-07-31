import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', '.getElementById(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': '.getElementById(' }, 'gm'),
])