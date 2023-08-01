import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googlesyndication\\.com/'),
    matchRegexInAttribute('script', 'src', 'ad\\.ca\\.doubleclick\\.net'),
    matchRegexInAttribute('script', 'src', '2mdn\\.net'),
    matchRegexInAttribute('script', 'src', 'ad\\.ca\\.doubleclick\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Goog_AdSense_'),
    matchRegexInInnerHTML('script', 'Goog_AdSense_OsdAdapter'),
    matchRegexInInnerHTML('script', '__google_ad_urls'),
    matchRegexInInnerHTML('script', 'adsbygoogle'),
    matchRegexInInnerHTML('script', 'google_ad_'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
