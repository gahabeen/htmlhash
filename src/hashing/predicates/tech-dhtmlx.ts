import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/dhtmlxcommon\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dhtmlDragAndDropObject'),
    matchRegexInInnerHTML('script', 'dhtmlXTreeItemObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
