import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/pimcorecore/js/targeting\\.js'),
    // in dom
    matchSelector(`.pimcore_area_content`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
