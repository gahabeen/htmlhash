import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'rx(?:\\.\\w+)?(?:\\.compat|\\.global)?(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Rx.CompositeDisposable'),
    matchRegexInInnerHTML('script', 'Rx.Symbol'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
