import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://cdn\\.plot\\.ly/plotly'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Plotly.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
