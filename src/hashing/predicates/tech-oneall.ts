import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.oneall\\.com/socialize'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'oa_social_login'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
