import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https://app\\.multiscreenstore\\.com/script\\.js'),
    matchRegexInAttribute('script', 'src', 'https://app\\.ecwid\\.com/script\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ecwid'),
    matchRegexInInnerHTML('script', 'EcwidCart'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
