import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cartjs\\.php\\?(?:.*&)?s=[^&]*myfortune3cart\\.com'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<link [^>]*href="[^\\/]*\\/\\/www\\.fortune3\\.com\\/[^"]*siterate\\/rate\\.css|Powered by <a [^>]*href="[^"]+fortune3\\.com)'),
    // in text

    // in css
])
