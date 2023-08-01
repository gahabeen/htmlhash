import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'partpayassets\\.blob\\.core\\.windows\\.net'),
    // in dom
    matchSelector(`[aria-labelledby='pi-payflex']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
