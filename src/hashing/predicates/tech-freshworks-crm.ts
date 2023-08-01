import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.freshmarketer\\.com'),
    matchRegexInAttribute('script', 'src', 'cdn\\.zarget\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ZargetForm'),
    matchRegexInInnerHTML('script', 'zarget'),
    matchRegexInInnerHTML('script', 'zargetAPI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
