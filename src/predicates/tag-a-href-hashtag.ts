import { matchAny } from '../fp';
import { linkAttributesLoosePattern } from '../patterns';

export const predicate = matchAny([
  linkAttributesLoosePattern({ href: '#' })
]);

export const tests = {
  success: [
    '<a href="#">To top</a>',
  ],
  failure: [],
};

