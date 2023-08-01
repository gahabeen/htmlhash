import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cloudfront\\.net/js/reflektion\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RFK_DEPLOY_TIME'),
    matchRegexInInnerHTML('script', 'RfkParams'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
