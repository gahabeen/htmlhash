import { matchAny } from '../fp';
import { tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', 'WHMCS'),
])
