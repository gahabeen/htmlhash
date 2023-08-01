import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'merchant\\.cdn\\.hoolah\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hoolah'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
