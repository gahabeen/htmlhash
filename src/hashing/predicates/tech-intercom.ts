import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:api\\.intercom\\.io/api|static\\.intercomcdn\\.com/intercom\\.v1)'),
    // in dom
    matchSelector(`link[href^='https://widget.intercom.io']`),
    matchSelector(`div.live-chat-loader-placeholder`),
    matchSelector(`iframe#intercom-frame`),
    // in js
    matchRegexInInnerHTML('script', 'Intercom'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
