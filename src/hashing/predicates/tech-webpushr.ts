import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WebPushr.notificationCard'),
    matchRegexInInnerHTML('script', 'webpushr_display_button'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'cdn\\.webpushr\\.com/app\\.min\\.js'),
    // in html

    // in text

    // in css
])
