import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gm_javascript\\.js\\.php'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gambio'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:<link[^>]* href="templates/gambio/|<a[^>]content\\.php\\?coID=\\d|<!-- gambio eof -->|<!--[\\s=]+Shopsoftware by Gambio GmbH \\(c\\))'),
    // in text

    // in css
])
