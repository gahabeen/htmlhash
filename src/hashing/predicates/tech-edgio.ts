import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/__layer0__/cache-manifest\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Layer0.Metrics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
