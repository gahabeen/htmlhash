import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wcs\\.naver\\.net/wcslog\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'naver-site-verification', ''),
    // in scripts

    // in html

    // in text

    // in css
])
