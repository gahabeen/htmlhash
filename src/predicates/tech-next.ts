import { matchAny } from '../fp';
import { divKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagTextPattern('script', '__NEXT_DATA__'),
  tagTextPattern('script', 'next.version'),
])
