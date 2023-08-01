import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.hextom\\.com/js/ultimatesalesboost\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hextom_usb'),
    matchRegexInInnerHTML('script', 'ht_usb.isLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
