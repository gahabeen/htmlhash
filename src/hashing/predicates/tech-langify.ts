import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Langify'),
    matchRegexInInnerHTML('script', 'langify'),
    matchRegexInInnerHTML('script', 'langify.settings.switcher.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
