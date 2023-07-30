import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  // "scriptSrc": "/wp-content/themes/basic/",
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/basic/'),
])