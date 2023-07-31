import { matchAny } from '../fp';
import { regexPattern } from '../patterns';

// export const predicate = matchAny([
//   regexPattern('<!--[^>]+Cached by WP-Optimize'),
// ])

export const predicate = (html: string) => {
  const m = !!html.match(regexPattern('<!--[^>]+Cached by WP-Optimize'));
  console.log(m);
  return m;
}

console.log(regexPattern('<!--[^>]+Cached by WP-Optimize'));