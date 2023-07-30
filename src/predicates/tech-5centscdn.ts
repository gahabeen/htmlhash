import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  // "dom": "link[href*='.5centscdn.com/']",
  tagKeyLooseValuePattern('link', 'href', '.5centscdn.com/'),
  tagKeyLooseValuePattern('script', 'src', '.5centscdn.com/'),
])
