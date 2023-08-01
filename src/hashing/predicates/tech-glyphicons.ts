import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<link[^>]* href=[^>]+glyphicons(?:\\.min)?\\.css|<img[^>]* src=[^>]+glyphicons)'),
    // in text

    // in css
])
