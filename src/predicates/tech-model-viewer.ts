import { matchAny } from '../fp';
import { tagKeyLooseValuePattern, tagTextPattern } from '../patterns';

export const predicate = matchAny([
  tagKeyLooseValuePattern('script', 'src', '/model-viewer/dist/model-viewer.min.js'),
  tagTextPattern('script', 'web.startComponents'),
])
