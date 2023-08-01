import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.onesignal\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OneSignal'),
    matchRegexInInnerHTML('script', '__oneSignalSdkLoadCount'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
