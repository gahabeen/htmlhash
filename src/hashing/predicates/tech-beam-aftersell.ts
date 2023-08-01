import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.aftersell\\.app/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'aftersell.hooks'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
