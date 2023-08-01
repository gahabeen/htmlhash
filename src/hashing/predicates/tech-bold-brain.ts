import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'brain-assets\\.boldapps\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BOLD.brain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
