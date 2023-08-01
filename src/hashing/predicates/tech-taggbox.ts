import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.taggbox\\.com'),
    matchRegexInAttribute('script', 'src', 'taggbox\\.com/app/js/embed\\.min\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'taggboxAjaxurl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
