import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/?typo3(?:conf|temp)/'),
    // in dom
    matchSelector(`link[href*='typo3conf'], link[href*='typo3temp'], img[src*='typo3conf'], img[src*='typo3temp']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'TYPO3\\s+(?:CMS\\s+)?(?:[\\d.]+)?(?:\\s+CMS)?'),
    // in scripts

    // in html

    // in text

    // in css
])
