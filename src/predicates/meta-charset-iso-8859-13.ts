import { matchAny } from '../fp';
import { metaAttributesLoosePattern, metaKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  metaKeyLooseValuePattern('charset', 'ISO-8859-13'), // Baltic languages
  metaAttributesLoosePattern({
    'http-equiv': 'Content-Type',
    content: 'charset=ISO-8859-13',
  })
])
