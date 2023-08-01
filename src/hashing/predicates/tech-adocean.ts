import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'adocean\\.pl/files/js/ado\\.js'),
    matchRegexInAttribute('script', 'src', 'adocean\\.pl\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ado.master'),
    matchRegexInInnerHTML('script', 'ado.placement'),
    matchRegexInInnerHTML('script', 'ado.slave'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
