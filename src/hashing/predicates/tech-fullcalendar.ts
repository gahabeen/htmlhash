import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/fullcalendar\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FullCalendar.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
