import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('no-title="YouTrack">'),
    matchRegex('data-reactid="[^"]+">youTrack ([0-9.]+)<\\;version:\\1'),
    matchRegex('type="application/opensearchdescription\\+xml" title="YouTrack"/>'),
    // in text

    // in css
])
