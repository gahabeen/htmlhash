import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.(?:smile|sweettooth)\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Smile.channel_key'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
