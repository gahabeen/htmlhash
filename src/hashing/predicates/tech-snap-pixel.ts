import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'intg\\.snapchat\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__SnapPixel'),
    matchRegexInInnerHTML('script', 'snaptr.pixelIdList'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
