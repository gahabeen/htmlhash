import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/integrations/embed/periodic-embed-resize\\.js'),
    // in dom
    matchSelector(`#periodic-embedded-calendar-script, .periodic-embedded-calendar-window, .bookingmain__maincontent`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
