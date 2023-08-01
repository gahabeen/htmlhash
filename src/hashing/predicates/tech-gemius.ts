import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'hit\\.gemius\\.pl/xgemius\\.js'),
    matchRegexInAttribute('script', 'src', 'hit\\.gemius\\.pl\\;confidence'),
    matchRegexInAttribute('script', 'src', 'xgemius\\.js\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gemius_hit'),
    matchRegexInInnerHTML('script', 'gemius_init'),
    matchRegexInInnerHTML('script', 'gemius_pending'),
    matchRegexInInnerHTML('script', 'pp_gemius_hit'),
    // in meta

    // in scripts

    // in html
    matchRegex('<a [^>]*onclick="gemius_hit'),
    // in text

    // in css
])
