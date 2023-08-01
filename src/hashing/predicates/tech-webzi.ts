import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//webzi\\.ir/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WebziCart'),
    matchRegexInInnerHTML('script', 'WebziValidate'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Webzi\\.ir\\sWebsite\\sBuilder$'),
    // in scripts

    // in html

    // in text

    // in css
])
