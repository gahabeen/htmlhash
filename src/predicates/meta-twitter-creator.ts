import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:creator')
]);

export const tests = {
  success: [
    '<meta property="twitter:creator" content="@username">',
  ],
  failure: [],
};