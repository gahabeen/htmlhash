import { tagAttributesLoosePattern, tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagAttributesLoosePattern('html', {
    lang: 'my'
  })
])
