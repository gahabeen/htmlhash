import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.raptorsmartadvisor\\.com'),
    matchRegexInAttribute('script', 'src', 'msecnd\\.net/script/raptor-([\\d.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Raptor'),
    matchRegexInInnerHTML('script', 'onRaptorLoaded'),
    matchRegexInInnerHTML('script', 'raptorBase64'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
