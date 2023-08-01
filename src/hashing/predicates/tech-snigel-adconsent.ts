import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:staging-)?cdn\\.snigelweb\\.com/(?:snhb|adconsent)/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adconsent.version'),
    matchRegexInInnerHTML('script', 'snhb.baseSettings'),
    matchRegexInInnerHTML('script', 'snhb.info.cmpVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
