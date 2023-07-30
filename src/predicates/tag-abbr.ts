import { tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyPattern('abbr')
]);

export const tests = {
  success: [
    '<abbr title="Abbreviation">Abbr</abbr>',
  ],
  failure: [],
};

