import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.goftino\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Goftino.setWidget'),
    matchRegexInInnerHTML('script', 'goftinoRemoveLoad'),
    matchRegexInInnerHTML('script', 'goftino_1'),
    matchRegexInInnerHTML('script', 'goftino_getUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
