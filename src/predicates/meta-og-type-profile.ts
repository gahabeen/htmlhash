import { matchAny } from '../fp';
import { metaAttributesLoosePattern } from '../patterns';

export const predicate = matchAny([
  metaAttributesLoosePattern({
    property: 'og:type',
    content: 'profile',
  })
])
