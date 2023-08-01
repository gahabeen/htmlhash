import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'my\\.setmore\\.\\w+/'),
    matchRegexInAttribute('script', 'src', '/setmore-appointments/script/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'setmorePopup'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
