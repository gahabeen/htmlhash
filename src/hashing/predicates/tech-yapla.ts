import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='\.yapla\.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'yaplaConsent.cookieName'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Yapla\\sv([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
