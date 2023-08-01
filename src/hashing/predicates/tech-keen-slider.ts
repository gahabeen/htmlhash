import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.keen-slider, div.keen-slider__slide`),
    // in js
    matchRegexInInnerHTML('script', 'KeenSlider'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
