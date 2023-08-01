import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//outsellapp\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'outsellAiRecommendationsIsEnabled'),
    matchRegexInInnerHTML('script', 'outsellApp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
