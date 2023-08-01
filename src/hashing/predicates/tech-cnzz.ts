import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//[^./]+\\.cnzz\\.com/(?:z_stat.php|core)\\?'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'cnzz_protocol'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
