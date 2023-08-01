import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Jekyll\\sv([\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('Powered by <a href="https?://jekyllrb\\.com"[^>]*>Jekyll</'),
    matchRegex('<!-- Created with Jekyll Now -'),
    matchRegex('<!-- Begin Jekyll SEO tag'),
    // in text

    // in css
])
