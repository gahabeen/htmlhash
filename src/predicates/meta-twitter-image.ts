import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:image')
]);

export const tests = {
  success: [
    '<meta property="twitter:image" content="https://example.com/image.png">',
  ],
  failure: [],
};

