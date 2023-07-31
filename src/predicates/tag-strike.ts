import { tagPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagPattern('strike')
])
