import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'xcart_web_dir'),
    matchRegexInInnerHTML('script', 'xliteConfig'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'X-Cart(?: (\\d+))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
