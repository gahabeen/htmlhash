import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'createElement(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'createElement(' }, 'gm'),
])