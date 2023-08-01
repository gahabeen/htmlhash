import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'client\\.crisp\\.chat/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$__CRISP_INCLUDED'),
    matchRegexInInnerHTML('script', '$crisp'),
    matchRegexInInnerHTML('script', 'CRISP_WEBSITE_ID'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
