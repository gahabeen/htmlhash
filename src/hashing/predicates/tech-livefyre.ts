import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'livefyre_init\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FyreLoader'),
    matchRegexInInnerHTML('script', 'L.version'),
    matchRegexInInnerHTML('script', 'LF.CommentCount'),
    matchRegexInInnerHTML('script', 'fyre'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+(?:id|class)="livefyre'),
    // in text

    // in css
])
