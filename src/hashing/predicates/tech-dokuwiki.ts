import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DOKU_TPL'),
    matchRegexInInnerHTML('script', 'doku_edit_text_content'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^DokuWiki( Release [\\d-]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
