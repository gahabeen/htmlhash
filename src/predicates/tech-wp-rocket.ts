import { matchAny } from '../fp';
import { regexPattern, tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('style', 'id', 'wpr-usedcss'),
  tagKeyLooseValuePattern('script', 'src', 'wp-rocket'),
  regexPattern('<!--[^>]+WP Rocket'),
  tagTextPattern('script', 'RocketLazyLoadScripts'),
  tagTextPattern('script', 'RocketPreloadLinksConfig'),
  tagTextPattern('script', 'rocket_lazy'),
])