import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'owl\\.carousel.*\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^"]+owl\\.carousel(?:\\.min)?\\.css'),
    // in text

    // in css
])
