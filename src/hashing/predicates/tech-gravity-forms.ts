import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/gravityforms/js/[^/]+\\.js\\?ver=([\\d.]+)$\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<div class=(?:"|\')[^>]*gform_wrapper'),
    matchRegex('<div class=(?:"|\')[^>]*gform_body'),
    matchRegex('<ul [^>]*class=(?:"|\')[^>]*gform_fields'),
    matchRegex('<link [^>]*href=(?:"|\')[^>]*wp-content/plugins/gravityforms/css/'),
    // in text

    // in css
])
