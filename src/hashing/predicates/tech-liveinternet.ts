import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<script [^>]*>[\\s\\S]*//counter\\.yadro\\.ru/hit'),
    matchRegex('<!--LiveInternet counter-->'),
    matchRegex('<!--/LiveInternet-->'),
    matchRegex('<a href="http://www\\.liveinternet\\.ru/click"'),
    // in text

    // in css
])
