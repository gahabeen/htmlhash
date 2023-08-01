import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.speedtestcustom\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.speedtestcustom.com'], a[href*='.speedtestcustom.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
