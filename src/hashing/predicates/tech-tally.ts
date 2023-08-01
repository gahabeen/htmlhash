import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//tally\\.so/'),
    // in dom
    matchSelector(`iframe[data-tally-src^='https://tally.so/embed/']`),
    matchSelector(`a[href*='//tally.so/r/']`),
    // in js
    matchRegexInInnerHTML('script', 'Tally'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
