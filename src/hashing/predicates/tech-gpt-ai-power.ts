import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/gpt3-ai-content-generator/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
