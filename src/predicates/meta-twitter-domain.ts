import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:domain')
]);

export const tests = {
  success: [
    '<meta property="twitter:domain" content="example.com">',
  ],
  failure: [],
};

