import { matchAny } from '../fp';
import { linkAttributesLoosePattern } from '../patterns';

export const predicate = matchAny([
  linkAttributesLoosePattern({ href: 'mailto:' })
]);

export const tests = {
  success: [
    '<a  href="mailto:example@domain.com">Email me</a>',
  ],
  failure: [],
};

