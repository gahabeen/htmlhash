import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googlesyndication\\.com/pagead/show_ads\\.js'),
    matchRegexInAttribute('script', 'src', 'tpc\\.googlesyndication\\.com/safeframe'),
    matchRegexInAttribute('script', 'src', 'googlesyndication\\.com.*abg\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
