import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.auryc\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'aurycJsLibConfig.base.code_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
