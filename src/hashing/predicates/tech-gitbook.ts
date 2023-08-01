import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__GITBOOK_INITIAL_PROPS__'),
    matchRegexInInnerHTML('script', '__GITBOOK_INITIAL_STATE__'),
    matchRegexInInnerHTML('script', '__GITBOOK_LAZY_MODULES__'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'GitBook ([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
