import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/petite-vue'),
    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '/petite-vue@([\\d\\.]+)/\\;version:\\1'),
    // in html

    // in text

    // in css
])
