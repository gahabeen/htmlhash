import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.aimtell\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_aimtellLoad'),
    matchRegexInInnerHTML('script', '_aimtellPushToken'),
    matchRegexInInnerHTML('script', '_aimtellWebhook'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
