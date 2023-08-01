import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.googleadservices\\.com/pagead/conversion_async\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'google_trackConversion'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', "gtag\\([^)]+'(AW-)"),
    // in html

    // in text

    // in css
])
