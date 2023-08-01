import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'chartbeat\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_sf_async_config'),
    matchRegexInInnerHTML('script', '_sf_endpt'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
