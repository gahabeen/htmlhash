import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FtosChat'),
    matchRegexInInnerHTML('script', 'ftos.core.getB2CCulture'),
    // in meta
    matchRegexInAttribute('meta', 'ftos-app-version', '\\sv([\\d\\.]+)\\s\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
