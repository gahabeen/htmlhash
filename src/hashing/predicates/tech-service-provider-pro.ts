import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/spp_clients\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', '\\.spp\\.io/js/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sppOrderform'),
    // in meta
    matchRegexInAttribute('meta', 'server', 'app.spp.co'),
    // in scripts

    // in html

    // in text

    // in css
])
