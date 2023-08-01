import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.?hellobar\\.(?:com|js)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'HelloBar'),
    matchRegexInInnerHTML('script', 'hellobarSiteSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
