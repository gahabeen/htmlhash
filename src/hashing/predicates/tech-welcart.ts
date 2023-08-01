import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'uscesL10n'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+?href="[^"]+usces_default(?:\\.min)?\\.css'),
    matchRegex('<!-- Welcart version : v([\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
