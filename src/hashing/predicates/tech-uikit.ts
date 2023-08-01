import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'uikit.*\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+class="[^"]*(?:uk-container|uk-section)'),
    // in text

    // in css
])
