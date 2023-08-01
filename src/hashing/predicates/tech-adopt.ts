import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tag\\.goadopt\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adoptApp.domain'),
    matchRegexInInnerHTML('script', 'adopt_website_code'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
