import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'flickity(?:/|@)([\\d\\.]+).+flickity(?:\\.pkgd)?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom
    matchSelector(`style[data-context='foundation-flickity-css'], div.flickity-enabled`),
    // in js
    matchRegexInInnerHTML('script', 'Flickity'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
