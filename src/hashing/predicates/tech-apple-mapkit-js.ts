import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//cdn\\.apple-mapkit\\.com/mk/([\\d\\.\\w]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mapkit._tileProvider'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
