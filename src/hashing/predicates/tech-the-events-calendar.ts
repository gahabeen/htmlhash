import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/the-events-calendar(?:-pro)?/'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/the-events-calendar/']`),
    // in js
    matchRegexInInnerHTML('script', 'TribeCalendar'),
    matchRegexInInnerHTML('script', 'tribe_l10n_datatables'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
