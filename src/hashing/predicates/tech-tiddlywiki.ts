import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'tiddler'),
    // in meta
    matchRegexInAttribute('meta', 'application-name', '^TiddlyWiki$'),
    matchRegexInAttribute('meta', 'copyright', '^TiddlyWiki created by Jeremy Ruston'),
    matchRegexInAttribute('meta', 'generator', '^TiddlyWiki$'),
    matchRegexInAttribute('meta', 'tiddlywiki-version', '^(.+)$\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<[^>]*type=[^>]text\\/vnd\\.tiddlywiki'),
    // in text

    // in css
])
