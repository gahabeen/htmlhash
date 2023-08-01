import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'openapi\\.map\\.naver\\.com/openapi/v([\\d\\.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'naver.maps'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
