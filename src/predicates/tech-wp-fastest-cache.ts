import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  // "scriptSrc": "/wp-content/cache/wpfc-minified/",
  tagKeyLooseValuePattern('script', 'src', '/wp-content/cache/wpfc-minified/'),
  // "dom": "link[href*='/wp-content/cache/wpfc-minified/']",
  tagKeyLooseValuePattern('link', 'href', '/wp-content/cache/wpfc-minified/'),
  tagTextPattern('script', 'Wpfcll'),
])
