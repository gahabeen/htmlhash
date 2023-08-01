import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/mailchimp-for-wp/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/mailchimp-for-wp/']`),
    // in js
    matchRegexInInnerHTML('script', 'mc4wp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
