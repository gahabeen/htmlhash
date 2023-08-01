import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'apple-itunes-app', 'app-id=543672169'),
    // in scripts

    // in html
    matchRegex('<a href="https://owncloud\\.com" target="_blank">ownCloud Inc\\.</a><br/>Your Cloud, Your Data, Your Way!'),
    // in text

    // in css
])
