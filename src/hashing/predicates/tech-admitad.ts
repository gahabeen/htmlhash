import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'artfut\\.com/static/(?:tracking|crossdevice)\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.admitad\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ADMITAD'),
    matchRegexInInnerHTML('script', 'admitad'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
