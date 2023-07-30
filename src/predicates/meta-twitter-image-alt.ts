import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:image:alt')
]);

export const tests = {
  success: [
    '<meta property="twitter:image:alt" content="This is an image">',
  ],
  failure: [],
};

