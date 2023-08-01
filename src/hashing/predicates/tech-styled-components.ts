import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[sc-component-id]`),
    matchSelector(`style[data-styled-version]`),
    matchSelector(`style[data-styled], style[data-styled-components], [sc-component-id]`),
    // in js
    matchRegexInInnerHTML('script', 'styled'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
