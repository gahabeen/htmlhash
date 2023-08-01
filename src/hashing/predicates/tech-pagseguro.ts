import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.pagseguro\\.uol\\.com\\.br/'),
    // in dom
    matchSelector(`form[action*='pagseguro.uol.com.br'][target='pagseguro']`),
    // in js
    matchRegexInInnerHTML('script', 'PagSeguroDirectPayment'),
    matchRegexInInnerHTML('script', '_PagSeguroDirectPayment'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
