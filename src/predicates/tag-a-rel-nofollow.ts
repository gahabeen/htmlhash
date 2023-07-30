import { linkAttributesLoosePattern, tagKeyPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkAttributesLoosePattern({
    rel: 'noffolow',
  })
]);

export const tests = {
  success: [
    '<a rel="noffolow" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>',
  ],
  failure: [],
};

