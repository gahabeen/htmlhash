import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:F|f)o(?:n|r)t-?(?:A|a)wesome(?:.*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)'),
    matchRegexInAttribute('script', 'src', '\\.fontawesome\\.com/([0-9a-z]+).js'),
    // in dom
    matchSelector(`link[href*='awesome']`),
    matchSelector(`link[href*='font-awesome']`),
    matchSelector(`link[href*='fontawesome-free']`),
    matchSelector(`link[href*='kit-pro.fontawesome.com']`),
    // in js
    matchRegexInInnerHTML('script', 'FontAwesomeCdnConfig'),
    matchRegexInInnerHTML('script', '___FONT_AWESOME___'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
