import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.id\\.services'),
    matchRegexInAttribute('script', 'src', 'cdn\\.verifypass\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'verifypass_api_instantiator'),
    matchRegexInInnerHTML('script', 'verifypass_is_loaded'),
    matchRegexInInnerHTML('script', 'verifypass_popup'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
