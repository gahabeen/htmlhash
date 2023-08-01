import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jquery-modal/([\\d\\.]+)/jquery\\.modal\\.min\\.js\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='jquery.modal.min.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
