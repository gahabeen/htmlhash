import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MindboxEndpointSettings'),
    matchRegexInInnerHTML('script', 'mindbox'),
    matchRegexInInnerHTML('script', 'mindboxBatchedModulesInitialized'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
