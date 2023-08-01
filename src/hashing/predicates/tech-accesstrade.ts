import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'accesstrade\\.net/js/'),
    matchRegexInAttribute('script', 'src', 'click\\.accesstra\\.de/js/nct/lp\\.js'),
    // in dom
    matchSelector(`img[src*='.accesstrade.net'],img[data-src*='.accesstrade.net']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
