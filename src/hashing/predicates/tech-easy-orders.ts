import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='easyorders.fra1.digitaloceanspaces.com/'], link[href*='easyorders.fra1.digitaloceanspaces.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
