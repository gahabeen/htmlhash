import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  // img[src*='.cloudimg.io/'], link[href*='.cloudimg.io/'], amp-img[src*='.cloudimg.io/']
  tagKeyLooseValuePattern('img', 'src', '.cloudimg.io/'),
  tagKeyLooseValuePattern('link', 'href', '.cloudimg.io/'),
  tagKeyLooseValuePattern('amp-img', 'src', '.cloudimg.io/'),
])
