import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'setTimeout(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'setTimeout(' }, 'gm'),
])