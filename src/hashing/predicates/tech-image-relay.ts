import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.imagerelay\\.com/'),
    // in dom
    matchSelector(`a[href*='.imagerelay.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'ImageRelay.accounts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
