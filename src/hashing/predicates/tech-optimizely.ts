import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'optimizely\\.com.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'optimizely'),
    matchRegexInInnerHTML('script', 'optimizelyClient.clientVersion'),
    matchRegexInInnerHTML('script', 'optimizelySdk'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
