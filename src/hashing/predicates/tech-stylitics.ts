import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.stylitics\\.com/v([\\d.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/stylitics/js/stylitics\\.js\\?ver=v([\\d.]+)\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='.stylitics.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Stylitics'),
    matchRegexInInnerHTML('script', 'stylitics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
