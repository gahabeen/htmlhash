import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mm_config'),
    matchRegexInInnerHTML('script', 'mm_current_user_id'),
    matchRegexInInnerHTML('script', 'mm_license'),
    matchRegexInInnerHTML('script', 'mm_user'),
    // in meta

    // in scripts

    // in html
    matchRegex('<noscript> To use Mattermost, please enable JavaScript\\. </noscript>'),
    // in text

    // in css
])
