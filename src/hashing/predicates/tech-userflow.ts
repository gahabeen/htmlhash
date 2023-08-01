import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.userflow\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'USERFLOWJS_QUEUE'),
    matchRegexInInnerHTML('script', 'userflow.endAllFlows'),
    matchRegexInInnerHTML('script', 'userflow.endChecklist'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
