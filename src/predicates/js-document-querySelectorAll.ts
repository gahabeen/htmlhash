import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', '.querySelectorAll(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': '.querySelectorAll(' }, 'gm'),
])