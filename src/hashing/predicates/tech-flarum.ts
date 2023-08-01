import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'app.cache.discussionList'),
    matchRegexInInnerHTML('script', 'app.forum.freshness'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div id="flarum-loading"'),
    // in text

    // in css
])
