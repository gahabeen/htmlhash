import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/ashe'),
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/ashe-pro-premium'),
  tagKeyLooseValuePattern('link', 'id', 'ashe-style-css'),
  tagTextPattern('link', 'ashePreloader'),
  tagTextPattern('link', 'asheStickySidebar'),
])