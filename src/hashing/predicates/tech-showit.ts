import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lib\\.showit\\.co/engine/([\\d\\.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'showit.default.siteId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
