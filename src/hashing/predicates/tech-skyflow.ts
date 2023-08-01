import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Skyflow.ElementType.CARD_NUMBER'),
    matchRegexInInnerHTML('script', 'Skyflow.ValidationRuleType'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
