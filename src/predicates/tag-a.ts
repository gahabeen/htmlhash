import { tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  tagKeyPattern('a')
]);

export const tests = {
  success: [
    '<a href="https://example.com">Example</a>',
  ],
  failure: [],
};

