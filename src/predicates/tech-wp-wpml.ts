import { matchAny } from '../fp';
import { tagAttributesLoosePattern, tagKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', 'sitepress-multilingual-cms'),
  tagAttributesLoosePattern('meta', {
    name: 'generator',
    content: 'WPML ver.',
  }),
])