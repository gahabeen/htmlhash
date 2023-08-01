import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.reviewsolicitors\\.co\\.uk/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rs.getWidgetHtml'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
