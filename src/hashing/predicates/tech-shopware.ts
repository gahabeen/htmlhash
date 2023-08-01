import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:(shopware)|/web/cache/[0-9]{10}_.+)\\.js\\;version:\\1?4'),
    matchRegexInAttribute('script', 'src', '/jquery\\.shopware\\.min\\.js'),
    matchRegexInAttribute('script', 'src', '/engine/Shopware/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'shopStudioGoogleTagManagerCloudGtagCallback'),
    // in meta
    matchRegexInAttribute('meta', 'application-name', 'Shopware'),
    // in scripts

    // in html
    matchRegex('<title>Shopware ([\\d\\.]+) [^<]+\\;version:\\1'),
    // in text

    // in css
])
