import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'd335luupugsy2\\.cloudfront\\.net/js/loader-scripts/.*-loader\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RDStation'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
