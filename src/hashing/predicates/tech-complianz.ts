import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/complianz-gdpr-premium'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'complianz.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
