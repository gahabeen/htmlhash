import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^[^\\/]*//[ac]dn\\.fusionads\\.net/(?:api/([\\d.]+)/)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_fusion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
