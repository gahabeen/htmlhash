import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.(?:extole|xtlo)\\.(?:com|net)/'),
    // in dom
    matchSelector(`li > a[href*='.extole.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'extole.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
