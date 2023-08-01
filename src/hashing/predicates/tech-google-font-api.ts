import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googleapis\\.com/.+webfont'),
    // in dom
    matchSelector(`[src*='fonts.g'], [href*='fonts.g']`),
    matchSelector(`style[data-href*='fonts.g']`),
    // in js
    matchRegexInInnerHTML('script', 'WebFonts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
