import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googletagservices\\.com/tag/js/gpt\\.js'),
    matchRegexInAttribute('script', 'src', 'securepubads\\.g\\.doubleclick.net/tag/js/gpt\\.js'),
    matchRegexInAttribute('script', 'src', 'pagead2\\.googlesyndication\\.com/tag/js/gpt\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
