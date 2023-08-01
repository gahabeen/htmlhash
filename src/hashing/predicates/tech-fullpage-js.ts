import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/fullPage\\.js(?:/([\\d\\.]+)/)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fullpage_api.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
