import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.insightly\\.services/'),
    // in dom
    matchSelector(`form[action*='.insightly.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
