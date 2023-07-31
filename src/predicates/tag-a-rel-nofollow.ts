import { matchAny } from '../fp';
import { linkAttributesLoosePattern } from '../patterns';

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

