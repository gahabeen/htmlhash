import { metaKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  metaKeyLooseValuePattern('property', 'twitter:card')
])

export const tests = {
  success: [
    '<meta property="twitter:card" content="summary_large_image">',
    '<meta property="twitter:card" content="summary">',
  ],
  failure: [],
};