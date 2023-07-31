import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('iframe', 'src', 'cloudflare'),
  tagKeyLooseValuePattern('script', 'src', 'cloudflare'),
  tagKeyLooseValuePattern('img', 'src', 'cloudflare'),
  tagTextPattern('script', 'cloudflare'),
])
