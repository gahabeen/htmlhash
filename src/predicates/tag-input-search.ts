import { tagAttributesLoosePattern, tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagAttributesLoosePattern('input', {
    class: 'search'
  })
])
