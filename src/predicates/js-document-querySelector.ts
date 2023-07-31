import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', '.querySelector(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': '.querySelector(' }, 'gm'),
])