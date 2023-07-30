import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'wpforms'),
  tagTextPattern('script', 'wpforms'),
  tagTextPattern('script', 'wpforms_settings'),
])