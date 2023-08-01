import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://api\\.captchme\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Captchme'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
