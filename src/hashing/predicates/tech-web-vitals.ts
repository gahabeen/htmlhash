import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'web-vitals@([\\d.]+)/dist/web-vitals.*\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'webVitals'),
    // in meta

    // in scripts
    matchRegexInInnerHTML(
        'script',
        '(8999999999999[\\s\\S]+1e12[\\s\\S]+(largest-contentful-paint|first-input|layout-shift)|(largest-contentful-paint|first-input|layout-shift)[\\s\\S]+8999999999999[\\s\\S]+1e12)'
    ),
    // in html

    // in text

    // in css
])
