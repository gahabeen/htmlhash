import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.corover\\.mobi/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CoRover_tag'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
