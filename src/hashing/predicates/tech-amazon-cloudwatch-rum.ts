import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AwsRum'),
    matchRegexInInnerHTML('script', 'AwsRumClient'),
    matchRegexInInnerHTML('script', 'AwsRumClient.v'),
    matchRegexInInnerHTML('script', 'AwsRumConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
