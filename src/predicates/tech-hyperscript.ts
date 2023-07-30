import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'unpkg.com/hyperscript.org'),
  tagTextPattern('script', '_hyperscript'),
])
