import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'platform\\.linkedin\\.com/(?:.*)?in\\.js(?:\\?version)?([\\d.]+)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OnLinkedInAuth'),
    matchRegexInInnerHTML('script', 'onLinkedInLoad'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
