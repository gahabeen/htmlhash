import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.paybright\\.com'),
    // in dom
    matchSelector(`link[href*='app.paybright.com']`),
    // in js
    matchRegexInInnerHTML('script', '_paybright_config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
