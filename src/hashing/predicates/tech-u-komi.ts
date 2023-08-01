import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GetUkomiSliderItemInfo'),
    matchRegexInInnerHTML('script', 'ukomiInstaLikeStep01'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
