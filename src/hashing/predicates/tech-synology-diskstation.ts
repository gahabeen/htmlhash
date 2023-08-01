import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'webapi/entry\\.cgi\\?api=SYNO\\.(?:Core|Filestation)\\.Desktop\\.'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'application-name', 'Synology DiskStation'),
    matchRegexInAttribute('meta', 'description', '^DiskStation provides a full-featured network attached storage'),
    // in scripts

    // in html
    matchRegex("<noscript><div class='syno-no-script'"),
    // in text

    // in css
])
