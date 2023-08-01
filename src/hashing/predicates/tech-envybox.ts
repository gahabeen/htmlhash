import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.saas-support\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EnvyWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
