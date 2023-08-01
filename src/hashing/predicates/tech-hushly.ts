import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.hushly\\.com/'),
    // in dom
    matchSelector(`link[href*='.hushly.com/']`),
    // in js
    matchRegexInInnerHTML('script', '__hly_widget_object'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
