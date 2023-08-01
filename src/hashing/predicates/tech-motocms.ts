import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/mt-includes/js/website(?:assets)?\\.(?:min)?\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^>]*\\/mt-content\\/[^>]*\\.css'),
    // in text

    // in css
])
