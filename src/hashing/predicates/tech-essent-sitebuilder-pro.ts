import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='www.essent.com'][target='_blank']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'GENERATOR', '^Essent® SiteBuilder Pro$'),
    // in scripts

    // in html

    // in text

    // in css
])
