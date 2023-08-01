import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Nette'),
    matchRegexInInnerHTML('script', 'Nette.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<input[^>]+data-nette-rules'),
    matchRegex('<div[^>]+id="snippet-'),
    matchRegex('<input[^>]+id="frm-'),
    // in text

    // in css
])
