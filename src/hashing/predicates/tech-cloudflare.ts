import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[src*='cdn.cloudflare'], [src*='cdnjs.cloudflare']`),
    matchSelector(`[href*='cdn.cloudflare'], [href*='cdnjs.cloudflare']`),
    // in js
    matchRegexInInnerHTML('script', 'CloudFlare'),
    // in meta
    matchRegexInAttribute('meta', 'image', '//cdn\\.cloudflare'),
    // in scripts

    // in html

    // in text

    // in css
])
