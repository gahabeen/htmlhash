import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tagpro\\.adpromedia\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'initAdproTags'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
