import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.(?:linksmart|lijit)\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sovrn'),
    matchRegexInInnerHTML('script', 'sovrn_render'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
