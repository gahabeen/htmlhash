import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BokunWidgetEmbedder'),
    matchRegexInInnerHTML('script', '__bokunWidgets'),
    matchRegexInInnerHTML('script', 'bokunBookingChannelUUID'),
    matchRegexInInnerHTML('script', 'bokunSessionId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
