import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.youtube\\.com/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com/(?:v|embed)'),
    // in text

    // in css
])
