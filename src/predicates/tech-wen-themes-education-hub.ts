import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  // "scriptSrc": "/wp-content/themes/education-hub(?:-pro)?/",
  tagKeyLooseValuePattern('script', 'src', '/wp-content/themes/education-hub(?:-pro)?/'),
  tagTextPattern('script', 'EducationHubScreenReaderText'),
])
