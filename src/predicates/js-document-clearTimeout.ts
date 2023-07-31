import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'clearTimeout(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'clearTimeout(' }, 'gm'),
])