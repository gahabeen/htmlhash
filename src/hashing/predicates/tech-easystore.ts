import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.easystore\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EasyStore'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
