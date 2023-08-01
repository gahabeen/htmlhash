import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/devbridgeAutocomplete(?:-min)?\\.js'),
    matchRegexInAttribute('script', 'src', '/jquery\\.devbridge-autocomplete/([0-9.]+)/jquery\\.autocomplete(?:.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$.devbridgeAutocomplete'),
    matchRegexInInnerHTML('script', 'jQuery.devbridgeAutocomplete'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
