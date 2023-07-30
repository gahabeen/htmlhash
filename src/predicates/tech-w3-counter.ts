import { tagKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'w3counter.com/tracker.js'),
])
