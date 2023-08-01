import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.33across\\.com/'),
    matchRegexInAttribute('script', 'src', '\\.tynt\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.33across.com'], link[href*='.33across.com'], link[href*='.tynt.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Tynt'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
