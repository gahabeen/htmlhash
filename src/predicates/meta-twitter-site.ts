import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:site')
]);

export const tests = {
  success: [
    '<meta property="twitter:site" content="https://example.com">',
  ],
  failure: [],
};

