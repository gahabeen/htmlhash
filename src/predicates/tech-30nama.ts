import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  // section[class*='player30nama']
  tagKeyLooseValuePattern('section', 'class', 'player30nama'),
])
