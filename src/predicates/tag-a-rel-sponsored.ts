import { linkAttributesLoosePattern, tagPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkAttributesLoosePattern({
    rel: 'sponsored',
  })
]);

export const tests = {
  success: [
    '<a rel="sponsored" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>',
  ],
  failure: [],
};

