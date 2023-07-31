import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', 'appendChild(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'appendChild(' }, 'gm'),
])