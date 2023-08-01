import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'react(?:-with-addons)?[.-](\\d+(?:\\.\\d+)+)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/([\\d\\.]+)/react(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '^react\\b.*\\.js'),
    // in dom
    matchSelector(`body > div`),
    matchSelector(`div[id*='react-root'], span[id*='react-']`),
    // in js
    matchRegexInInnerHTML('script', 'React.version'),
    matchRegexInInnerHTML('script', 'ReactOnRails'),
    matchRegexInInnerHTML('script', '__REACT_ON_RAILS_EVENT_HANDLERS_RAN_ONCE__'),
    // in meta
    matchRegexInAttribute('meta', 'description', '^Web site created using create-react-app$'),
    // in scripts

    // in html
    matchRegex('<[^>]+data-react'),
    // in text

    // in css
])
