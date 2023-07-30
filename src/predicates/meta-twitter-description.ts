import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:description')
]);

export const tests = {
  success: [
    '<meta property="twitter:description" content="This is a description">',
  ],
  failure: [],
};
