import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/oxygen'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<body class=(?:"|\')[^"\']*oxygen-body'),
    matchRegex('<link [^>]*href=(?:"|\')[^>]*wp-content/plugins/oxygen/'),
    // in text

    // in css
])
