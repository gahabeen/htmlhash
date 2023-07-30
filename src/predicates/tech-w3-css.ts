import { tagKeyLooseValuePattern } from '../patterns';
import { matchAny } from '../fp';

export const predicate = matchAny([
  // "dom": "link[href*='/w3.css']",
  tagKeyLooseValuePattern('link', 'href', '/w3.css'),
])
