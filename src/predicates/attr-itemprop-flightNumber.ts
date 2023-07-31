import { matchAny } from '../fp';
  import { tagKeyValuePattern } from '../patterns';

  export const predicate = matchAny([
    tagKeyValuePattern('itemprop', 'flightNumber', 'gm'),
  ])