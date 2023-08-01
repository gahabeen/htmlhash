import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.ometria\\.com'),
    // in dom
    matchSelector(`form[action*='api.ometria.com']`),
    // in js
    matchRegexInInnerHTML('script', 'AddOmetriaBasket'),
    matchRegexInInnerHTML('script', 'AddOmetriaIdentify'),
    matchRegexInInnerHTML('script', 'ometria'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
