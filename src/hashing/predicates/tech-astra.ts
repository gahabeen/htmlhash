import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/astra\\S*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='themes/astra']`),
    matchSelector(`style[id*='astra-theme'], body[class*='astra-'], script[id*='astra-']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
