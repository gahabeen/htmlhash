import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.vteximg.com.br'], source[srcset*='.vteximg.com.br']`),
    // in js
    matchRegexInInnerHTML('script', 'vtex'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
