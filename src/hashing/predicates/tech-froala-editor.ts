import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.fr-view, .fr-box, .fr-popup`),
    matchSelector(`.froala-box`),
    // in js
    matchRegexInInnerHTML('script', 'FroalaEditor.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
