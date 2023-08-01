import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?:\\/\\/.+\\.agilone\\.com'),
    matchRegexInAttribute('script', 'src', '^https?:\\/\\/scripts\\.agilone\\.com\\/latest\\/a1.js'),
    // in dom
    matchSelector(`[data-function*='Agilone']`),
    // in js
    matchRegexInInnerHTML('script', '$A1'),
    matchRegexInInnerHTML('script', '$A1Config'),
    matchRegexInInnerHTML('script', 'agiloneObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
