import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.sheerid.com/'], img[src*='.sheerid.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'SheerID'),
    matchRegexInInnerHTML('script', 'sheerid'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '"sheerIdEndpoint":'),
    // in html

    // in text

    // in css
])
