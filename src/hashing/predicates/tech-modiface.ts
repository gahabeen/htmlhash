import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.modiface\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.modiface.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'initModiface'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
