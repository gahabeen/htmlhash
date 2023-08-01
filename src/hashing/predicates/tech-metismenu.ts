import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/|\\.)metisMenu(?:js)?(?:\\.min)?\\.js(?:\\?([\\d\\.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MetisMenu'),
    matchRegexInInnerHTML('script', 'metisMenu'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
