import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', '4tellcdn.azureedge.net'),
  tagTextPattern('script', '_4TellBoost'),
])
