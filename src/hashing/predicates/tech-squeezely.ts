import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//squeezely\\.tech/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sqzlCommon.getVariantName'),
    matchRegexInInnerHTML('script', 'sqzlPersonalization'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
