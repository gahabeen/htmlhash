import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cloudfront\\.net/atrk\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_atrk_opts.domain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
