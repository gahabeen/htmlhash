import { tagAttributesLoosePattern, tagPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagAttributesLoosePattern('html', {
    lang: 'co'
  })
])
