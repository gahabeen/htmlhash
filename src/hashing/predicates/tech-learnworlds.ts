import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.mycourse\\.app/v([\\d\\.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LWClient.ebooks'),
    matchRegexInInnerHTML('script', 'LWSettings.deactive_components'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
