import { matchAny } from '../fp';
import { tagKeyPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyPattern('html', 'data-adblockkey'),
])
