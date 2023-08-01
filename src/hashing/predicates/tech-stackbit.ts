import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.stackbit\\.com'),
    // in dom
    matchSelector(`[data-sb-object-id]`),
    matchSelector(`header[data-sb-field-path]`),
    matchSelector(`script#__NEXT_DATA__`),
    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.withStackbit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
