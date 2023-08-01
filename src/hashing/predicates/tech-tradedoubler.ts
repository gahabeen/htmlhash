import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'swrap\\.tradedoubler\\.com'),
    // in dom
    matchSelector(`a[href*='clk.tradedoubler.com/click']`),
    matchSelector(`img[src*='impes.tradedoubler.com/imp']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
