import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'global\\.prd\\.borderfree\\.com'),
    matchRegexInAttribute('script', 'src', 'wm\\.prd\\.borderfree\\.com'),
    matchRegexInAttribute('script', 'src', 'bfx-objects\\.prd\\.borderfree\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bfx._apiKey'),
    matchRegexInInnerHTML('script', 'bfx._brand'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
