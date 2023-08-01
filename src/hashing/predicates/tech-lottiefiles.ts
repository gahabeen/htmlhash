import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/dist/lottie-player\\.js'),
    matchRegexInAttribute('script', 'src', '/dist/tgs-player\\.js'),
    // in dom
    matchSelector(`lottie-player, div[data-animation-type='lottie'], div[data-testid='lottie-player'], clipPath[id*='__lottie_element_']`),
    // in js
    matchRegexInInnerHTML('script', 'lottie.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
