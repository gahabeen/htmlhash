import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'video:tag')
])