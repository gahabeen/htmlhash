import { matchAny } from '../fp';
import { metaAttributesLoosePattern, metaKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  metaKeyLooseValuePattern('charset', 'ISO-8859-8'), // Hebrew
  metaAttributesLoosePattern({
    'http-equiv': 'Content-Type',
    content: 'charset=ISO-8859-8',
  })
])
