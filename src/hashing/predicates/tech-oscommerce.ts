import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<br />Powered by <a href="https?://www\\.oscommerce\\.com'),
    matchRegex('<(?:input|a)[^>]+name="osCsid"'),
    matchRegex('<(?:tr|td|table)class="[^"]*infoBoxHeading'),
    // in text

    // in css
])
