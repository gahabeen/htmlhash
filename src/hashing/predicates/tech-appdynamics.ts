import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'adrum'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ADRUM.conf.agentVer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
