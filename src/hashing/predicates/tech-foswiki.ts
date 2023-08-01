import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'foswiki'),
    // in meta
    matchRegexInAttribute('meta', 'foswiki.SERVERTIME', ''),
    matchRegexInAttribute('meta', 'foswiki.WIKINAME', ''),
    // in scripts

    // in html
    matchRegex('<div class="foswiki(?:Copyright|Page|Main)">'),
    // in text

    // in css
])
