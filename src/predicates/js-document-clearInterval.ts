import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', 'clearInterval(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'clearInterval(' }, 'gm'),
])