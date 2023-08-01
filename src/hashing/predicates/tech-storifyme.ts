import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.storifyme\\.com/'),
    // in dom
    matchSelector(`link[href*='cdn.storifyme.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
