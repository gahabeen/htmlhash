import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:device|js)\\.maxmind\\.com/'),
    matchRegexInAttribute('script', 'src', 'geoip\\.maxmind\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'geoip-js\\.com/.+/v([\\d\\.]+)/\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
