import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('iframe', 'src', '.cloudflarestream.com'),
  tagKeyLooseValuePattern('img', 'src', '//cdn.cloudflare'),
  tagTextPattern('script', 'cloudflare'),
])
