import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'iubenda\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_iub'),
    matchRegexInInnerHTML('script', 'addIubendaCs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
