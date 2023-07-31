import { matchAny } from '../fp';
import { attributesLoosePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', 'window.', 'gm'),
  attributesLoosePattern({ '/on[^"=]+/': 'window.' }, 'gm'),
])