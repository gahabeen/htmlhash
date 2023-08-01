import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'userlike\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'userlikelib\\.min\\.js'),
    matchRegexInAttribute('script', 'src', '//userlike-cdn-widgets\\.'),
    matchRegexInAttribute('script', 'src', 'api\\.userlike\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__USERLIKE_MOUNT_GUARD__'),
    matchRegexInInnerHTML('script', 'userlike'),
    matchRegexInInnerHTML('script', 'userlikeInit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
