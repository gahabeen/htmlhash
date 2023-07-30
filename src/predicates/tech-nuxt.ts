import { matchAny } from '../fp';
import { divKeyLooseValuePattern } from '../patterns';

export const predicate = matchAny([
  '__NUXT__',
  '__NUXT_DATA__',
  '__NUXT_COLOR_MODE__',
  '/_nuxt/',
  divKeyLooseValuePattern('class', 'nuxt')
])
