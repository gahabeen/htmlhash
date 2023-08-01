import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pma_absolute_uri'),
    // in meta

    // in scripts

    // in html
    matchRegex('!\\[CDATA\\[[^<]*PMA_VERSION:\\"([\\d.]+)\\;version:\\1'),
    matchRegex('(?: \\| phpMyAdmin ([\\d.]+)<\\/title>|PMA_sendHeaderLocation\\(|<link [^>]*href="[^"]*phpmyadmin\\.css\\.php)\\;version:\\1'),
    // in text

    // in css
])
