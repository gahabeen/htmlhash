import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.reservio\\.com'),
    // in dom
    matchSelector(`.reservio-booking-button`),
    matchSelector(`a[href*='.reservio.com'][target='_blank']`),
    matchSelector(`a[href*='bookings.reservio.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
