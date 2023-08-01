import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='nicepage.css']`),
    // in js
    matchRegexInInnerHTML('script', '_npAccordionInit'),
    matchRegexInInnerHTML('script', '_npDialogsInit'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Nicepage\\s([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
