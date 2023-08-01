import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'q\\.bstatic\\.com/'),
    // in dom
    matchSelector(`form[action*='.booking.com/'][target='_blank'], img[src*='q-xx.bstatic.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
