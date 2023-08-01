import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.dx1app\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Dx1.Dnn'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
