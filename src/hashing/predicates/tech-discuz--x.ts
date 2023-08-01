import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DISCUZCODE'),
    matchRegexInInnerHTML('script', 'discuzVersion'),
    matchRegexInInnerHTML('script', 'discuz_uid'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Discuz! X([\\d\\.]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
