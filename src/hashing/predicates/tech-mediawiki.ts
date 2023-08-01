import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mw.util.toggleToc'),
    matchRegexInInnerHTML('script', 'wgTitle'),
    matchRegexInInnerHTML('script', 'wgVersion'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^MediaWiki ?(.+)$\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<body[^>]+class="mediawiki"'),
    matchRegex('<(?:a|img)[^>]+>Powered by MediaWiki</a>'),
    matchRegex('<a[^>]+/Special:WhatLinksHere/'),
    // in text

    // in css
])
