import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ohdear\\.app/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.config.userAgent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
