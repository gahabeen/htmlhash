import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.tabarn\\.app/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'tabarnapp_loaded_ad'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
