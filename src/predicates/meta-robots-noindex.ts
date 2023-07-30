import { tagAttributesLoosePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagAttributesLoosePattern('meta', {
    name: 'robots',
    content: 'noindex'
  })
])
