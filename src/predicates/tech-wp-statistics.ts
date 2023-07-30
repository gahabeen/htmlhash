import { matchAny } from '../fp';
import { regexPattern, tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('link', 'href', 'wp-statistics'),
  regexPattern("<!-- Analytics by WP-Statistics"),
  tagTextPattern('script', 'WP_Statistics_http'),
  tagTextPattern('script', 'wps_statistics_object'),
])