import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.smartsuppchat\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$smartsupp.options.widgetVersion'),
    matchRegexInInnerHTML('script', 'smartsupp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
