import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^/otrs-web/js/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!--\\s+OTRS: Copyright'),
    // in text

    // in css
])
