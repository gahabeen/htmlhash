import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[class^='astro-']`),
    matchSelector(`astro-root`),
    matchSelector(`link[href*='/_astro/']`),
    // in js
    matchRegexInInnerHTML('script', 'Astro'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Astro\\sv([\\d\\.]+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
