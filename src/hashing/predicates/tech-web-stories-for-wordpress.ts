import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'amp-story-generator-name', '^Web Stories for WordPress$'),
    matchRegexInAttribute('meta', 'amp-story-generator-version', '^(.+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
