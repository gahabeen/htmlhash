import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'brickSite.common.apiUrls.base'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Bricksite$'),
    // in scripts

    // in html

    // in text

    // in css
])
