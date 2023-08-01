import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'pay\\.google\\.com/([a-z/]+)/pay\\.js'),
    // in dom
    matchSelector(`[aria-labelledby='pi-google_pay'], ul[data-shopify-buttoncontainer] li`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
