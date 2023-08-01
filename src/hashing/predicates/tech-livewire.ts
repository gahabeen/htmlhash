import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'livewire(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'livewire'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]{1,512}\\bwire:'),
    // in text

    // in css
])
