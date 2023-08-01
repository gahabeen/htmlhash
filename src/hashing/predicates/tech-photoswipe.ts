import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'photoswipe/([\\d\\.]+)/photoswipe\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PhotoSwipe'),
    matchRegexInInnerHTML('script', 'PhotoSwipeUI_Default'),
    matchRegexInInnerHTML('script', 'photoswipeParseHash'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
