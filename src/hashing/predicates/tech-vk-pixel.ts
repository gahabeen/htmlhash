import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vk\\.com/js/api/openapi\\.js'),
    // in dom
    matchSelector(`img[src*='vk.com/rtrg?p=VK-RTRG-']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
