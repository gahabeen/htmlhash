import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//minero\\.cc/lib/minero(?:-miner|-hidden)?\\.min\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
