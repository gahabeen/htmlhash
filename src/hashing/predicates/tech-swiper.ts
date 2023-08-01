import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'swiper(?:\\.min)?\\.js'),
    // in dom
    matchSelector(`div[data-swiper-slide-index], [swiper-container]`),
    // in js
    matchRegexInInnerHTML('script', 'Swiper'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
