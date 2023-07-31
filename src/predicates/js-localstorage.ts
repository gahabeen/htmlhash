import { attributesLoosePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagTextPattern('script', 'localStorage', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'localStorage' }, 'gm'),
])