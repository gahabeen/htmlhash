import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'live\\.sequracdn\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Sequra'),
    matchRegexInInnerHTML('script', 'SequraConfiguration'),
    matchRegexInInnerHTML('script', 'sequraProducts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
