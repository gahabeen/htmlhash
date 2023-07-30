import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'searchwp-live-ajax-search'),
  tagKeyLooseValuePattern('script', 'src', 'live-search.min.js'),
  tagKeyLooseValuePattern('link', 'href', 'live-search.min.js'),
  tagTextPattern('script', 'searchwp_live_search'),
])