import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-(?:content|includes)/'),
    matchRegexInAttribute('script', 'src', 'wp-embed\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wp_username'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^WordPress(?: ([\\d.]+))?\\;version:\\1'),
    matchRegexInAttribute('meta', 'shareaholic:wp_version', ''),
    // in scripts

    // in html
    matchRegex('<link rel=["\']stylesheet["\'] [^>]+/wp-(?:content|includes)/'),
    matchRegex('<link[^>]+s\\d+\\.wp\\.com'),
    // in text

    // in css
])
