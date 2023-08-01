import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.tapcart\\.com/'),
    // in dom
    matchSelector(`a[href*='tapcart.app'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'tapcartwebBanner'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
