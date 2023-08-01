import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/sitepress-multilingual-cms/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^WPML\\sver\\:([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
