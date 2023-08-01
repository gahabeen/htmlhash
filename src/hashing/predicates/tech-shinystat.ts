import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://codice(?:business|ssl|pro|isp)?\\.shinystat\\.com/cgi-bin/getcod\\.cgi'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SSsdk'),
    // in meta

    // in scripts

    // in html
    matchRegex('<img[^>]*\\s+src=[\'"]?https?://www\\.shinystat\\.com/cgi-bin/shinystat\\.cgi\\?[^\'"\\s>]*[\'"\\s/>]'),
    // in text

    // in css
])
