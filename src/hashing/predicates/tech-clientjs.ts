import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/clientjs@(\\d.*?)/\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/ClientJS/(?:(\\d.*?)/)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ClientJS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
