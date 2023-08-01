import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//flazio\\.org/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_exaudiflazio'),
    matchRegexInInnerHTML('script', 'flazio_global_conversion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
