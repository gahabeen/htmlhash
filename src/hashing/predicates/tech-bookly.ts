import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/bookly-responsive-appointment-booking-tool/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BooklyL10n.daysShort'),
    matchRegexInInnerHTML('script', 'bookly'),
    matchRegexInInnerHTML('script', 'booklyCustomerProfile'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
