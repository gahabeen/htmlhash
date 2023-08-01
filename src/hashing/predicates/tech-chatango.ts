import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'st\\.chatango\\.com'),
    // in dom
    matchSelector(`iframe[src*='st.chatango.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
