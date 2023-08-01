import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//static\\.hotjar\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'HotLeadfactory'),
    matchRegexInInnerHTML('script', 'HotleadController'),
    matchRegexInInnerHTML('script', 'hj.apiUrlBase'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
