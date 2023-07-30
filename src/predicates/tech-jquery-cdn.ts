import { matchAny } from '../fp';
import { tagKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'code.jquery.com'),
])