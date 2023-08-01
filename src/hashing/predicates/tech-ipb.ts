import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jscripts/ips_'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'IPBoard'),
    matchRegexInInnerHTML('script', 'ipb_var'),
    matchRegexInInnerHTML('script', 'ipsSettings'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+ipb_[^>]+\\.css'),
    // in text

    // in css
])
