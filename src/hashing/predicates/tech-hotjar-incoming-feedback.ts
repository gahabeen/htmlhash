import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.hotjar\\.com/preact-incoming-feedback'),
    // in dom
    matchSelector(`a[href*='hotjar.com/incoming-feedback'][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
