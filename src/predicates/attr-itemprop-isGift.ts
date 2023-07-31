import { matchAny } from '../fp';
  import { tagKeyValuePattern } from '../patterns';

  export const predicate = matchAny([
    tagKeyValuePattern('itemprop', 'isGift', 'gm'),
  ])