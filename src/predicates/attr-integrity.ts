import { matchAny } from '../fp';
import { keyPattern } from '../patterns';

export const predicate = matchAny([
  keyPattern('integrity', 'gm'),
])