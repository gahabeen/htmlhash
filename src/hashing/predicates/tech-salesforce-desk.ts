import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/s/sfsites/auraFW/'),
    // in dom
    matchSelector(`link[href*='/s/sfsites/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
