import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'setInterval(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'setInterval(' }, 'gm'),
])