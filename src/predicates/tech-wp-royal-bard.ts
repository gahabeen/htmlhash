import { matchAny } from '../fp';
import { tagKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/bard'),
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/bard-pro-premium'),
  tagKeyLooseValuePattern('link', 'id', 'bard-style-css'),
])