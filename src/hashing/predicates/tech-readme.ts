import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/cdn\\.readme\\.io/js/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'readme-deploy', '^[\\d\\.]+$'),
    matchRegexInAttribute('meta', 'readme-version', '^[\\d\\.]+$'),
    // in scripts

    // in html

    // in text

    // in css
])
