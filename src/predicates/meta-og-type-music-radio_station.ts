import { metaAttributesLoosePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaAttributesLoosePattern({
    property: 'og:type',
    content: 'music.radio_station',
  })
])
