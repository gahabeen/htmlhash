import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vBulletin'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'vBulletin ?([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<div id="copyright">Powered by vBulletin'),
    // in text

    // in css
])
