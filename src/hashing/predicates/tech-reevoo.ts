import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.reevoo\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ReevooApi'),
    matchRegexInInnerHTML('script', 'reevooAccessCode'),
    matchRegexInInnerHTML('script', 'reevooLoader.tracking'),
    matchRegexInInnerHTML('script', 'reevooUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
