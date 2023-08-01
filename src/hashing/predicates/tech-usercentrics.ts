import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.usercentrics\\.eu/.+\\.js'),
    // in dom
    matchSelector(`link[href*='app.usercentrics.eu'], script[data-usercentrics]`),
    // in js
    matchRegexInInnerHTML('script', 'usercentrics.appVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
