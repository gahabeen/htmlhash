import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/ep_etherpad-lite/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'padeditbar'),
    matchRegexInInnerHTML('script', 'padimpexp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
