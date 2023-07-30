import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  // "dom": "iframe[src*='.33across.com'], link[href*='.33across.com'], link[href*='.tynt.com']",
  tagKeyLooseValuePattern('iframe', 'src', '.33across.com'),
  tagKeyLooseValuePattern('link', 'href', '.33across.com'),
  tagKeyLooseValuePattern('link', 'href', '.tynt.com'),
  tagKeyLooseValuePattern('script', 'src', '.33across.com'),
  tagKeyLooseValuePattern('script', 'src', '.tynt.com'),
])
