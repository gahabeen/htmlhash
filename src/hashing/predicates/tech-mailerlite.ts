import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mailerlite\\.com/'),
    // in dom
    matchSelector(`link[href*='.mailerlite.com']`),
    // in js
    matchRegexInInnerHTML('script', 'MailerLiteObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
