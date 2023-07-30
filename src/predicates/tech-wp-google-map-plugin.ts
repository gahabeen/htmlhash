import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'wp-google-map-plugin'),
  tagTextPattern('script', 'wpgmp_local'),
])
