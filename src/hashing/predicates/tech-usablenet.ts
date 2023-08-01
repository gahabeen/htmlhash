import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.usablenet\\.com/pt/'),
    // in dom
    matchSelector(`iframe[src*='.usablenet.com/pt/']`),
    // in js
    matchRegexInInnerHTML('script', 'enableUsableNetAssistive'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
