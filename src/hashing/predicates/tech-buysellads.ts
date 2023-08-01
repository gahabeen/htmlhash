import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://s\\d\\.buysellads\\.com/'),
    matchRegexInAttribute('script', 'src', 'servedby-buysellads\\.com/monetization(?:\\.[\\w\\d]+)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_bsa'),
    matchRegexInInnerHTML('script', '_bsaPRO'),
    matchRegexInInnerHTML('script', '_bsap'),
    matchRegexInInnerHTML('script', '_bsap_serving_callback'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
