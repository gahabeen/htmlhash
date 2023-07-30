import { tagKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  // "scriptSrc": "/wp-content/plugins/wp-automatic/",
  tagKeyLooseValuePattern('script', 'src', '/wp-content/plugins/wp-automatic/'),
])
