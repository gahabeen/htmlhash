import { linkAttributesLoosePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkAttributesLoosePattern({
    rel: 'prefetch',
    as: 'script',
  }),
]);