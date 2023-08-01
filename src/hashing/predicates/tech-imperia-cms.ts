import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`source[srcset*='.de/imperia/md/images/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^IMPERIA\\s([\\d\\.\\_]+)\\;version:\\1'),
    matchRegexInAttribute('meta', 'x-imperia-live-info', ''),
    // in scripts

    // in html

    // in text

    // in css
])
