import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sp\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', 'd1fc8wv8zag5ca\\.cloudfront\\.net/.+/sp\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/gh/snowplow/sp-js-assets@(?:.+)/sp\\.js'),
    matchRegexInAttribute('script', 'src', 'cdnjs\\.cloudflare\\.com/ajax/libs/snowplow/(?:.+)/sp.*\\.js'),
    matchRegexInAttribute('script', 'src', 'unpkg.com/@snowplow/javascript-tracker@(?:.+)/dist/sp.*\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/npm/@snowplow/javascript-tracker@(?:.+)/dist/sp\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GlobalSnowplowNamespace'),
    matchRegexInInnerHTML('script', 'Snowplow'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
