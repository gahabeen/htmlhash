import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/components/com_jshopping/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'joomshoppingVideoHtml5'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
