import { linkAttributesLoosePattern, tagPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  linkAttributesLoosePattern({
    rel: 'ugc',
  })
]);

export const tests = {
  success: [
    '<a rel="ugc" href="https://cheese.example.com/Appenzeller_cheese">Appenzeller</a>',
  ],
  failure: [],
};

