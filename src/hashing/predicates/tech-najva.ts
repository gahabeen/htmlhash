import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.najva\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Najva.identifyEmailSubscriber'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
