import { matchAny } from '../fp';
import { metaAttributesLoosePattern, metaKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  metaKeyLooseValuePattern('charset', 'utf-8'),
  metaAttributesLoosePattern({
    'http-equiv': 'Content-Type',
    content: 'charset=utf-8',
  })
])
