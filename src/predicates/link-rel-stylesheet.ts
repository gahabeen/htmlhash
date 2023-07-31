import { linkKeyValuePattern, metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkKeyValuePattern('rel', 'stylesheet')
])
