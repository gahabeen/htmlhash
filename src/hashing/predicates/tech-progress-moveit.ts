import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'apple-itunes-app', 'app-id=1500056420'),
    matchRegexInAttribute('meta', 'google-play-app', 'app-id=com\\.progress\\.moveit\\.transfer\\.dev\\.appid'),
    // in scripts

    // in html

    // in text

    // in css
])
