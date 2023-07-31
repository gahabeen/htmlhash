import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', '.setAttribute(', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': '.setAttribute(' }, 'gm'),
])