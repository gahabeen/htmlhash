import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.infusionsoft\\.com/'),
    // in dom
    matchSelector(`form[action*='property.infusionsoft.com'], link[href*='.infusionsoft.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
