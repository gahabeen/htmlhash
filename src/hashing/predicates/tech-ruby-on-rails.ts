import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/assets/application-[a-z\\d]{32}/\\.js\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ReactOnRails'),
    matchRegexInInnerHTML('script', '__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__'),
    matchRegexInInnerHTML('script', '_rails_loaded'),
    // in meta
    matchRegexInAttribute('meta', 'csrf-param', '^authenticity_token$\\;confidence'),
    // in scripts

    // in html

    // in text

    // in css
])
