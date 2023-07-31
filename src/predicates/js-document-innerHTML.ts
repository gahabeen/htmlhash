import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'innerHTML', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'innerHTML' }, 'gm'),
])