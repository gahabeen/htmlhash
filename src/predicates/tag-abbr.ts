import { matchAny } from '../fp';
import { tagPattern } from '../patterns';

export const predicate = matchAny([
  tagPattern('abbr')
]);

export const tests = {
  success: [
    '<abbr title="Abbreviation">Abbr</abbr>',
  ],
  failure: [],
};

