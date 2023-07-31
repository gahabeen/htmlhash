import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', 'addEventListener(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'addEventListener(' }, 'gm'),
])