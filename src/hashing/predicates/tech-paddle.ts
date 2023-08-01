import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.paddle\\.com/paddle/paddle\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Paddle.Checkout'),
    matchRegexInInnerHTML('script', 'PaddleScriptLocation'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
