import { anyOf, matchRegexInAttribute } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/va/script\\.js'),
    matchRegexInAttribute('script', 'src', '/_vercel/insights/script\\.js'),
    // in dom

    // in js
    // matchRegexInInnerHTML('script', 'va'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
