import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'wpFeatherlight.pkgd.min.js'),
])
