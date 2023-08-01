import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Koala Web Framework CMS'),
    // in scripts

    // in html
    matchRegex('<!--[^>]+This website is powered by Koala Web Framework CMS'),
    // in text

    // in css
])
