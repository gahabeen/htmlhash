import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'wp-maintenance-mode'),
  tagTextPattern('script', 'wpmm_vars'),
])