import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//(?:cas\\.criteo\\.com|(?:[^/]\\.)?criteo\\.net)/'),
    matchRegexInAttribute('script', 'src', '//static\\.criteo\\.net/js/ld/ld\\.js'),
    // in dom
    matchSelector(`link[href*='.criteo.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Criteo'),
    matchRegexInInnerHTML('script', 'criteo_pubtag'),
    matchRegexInInnerHTML('script', 'criteo_q'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
