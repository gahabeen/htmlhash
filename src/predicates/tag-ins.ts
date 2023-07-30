import { tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyPattern('ins')
])
