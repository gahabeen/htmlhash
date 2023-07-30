import { matchAny } from '../fp';
import { tagAttributesLoosePattern } from '../patterns';

export const predicate = matchAny([
  tagAttributesLoosePattern('html', {
    lang: 'zh-hant'
  })
])
