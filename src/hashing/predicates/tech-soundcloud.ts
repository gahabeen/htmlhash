import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sndcdn\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.soundcloud.com/'], img[src*='.sndcdn.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'SC.Widget.Events.PLAY'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
