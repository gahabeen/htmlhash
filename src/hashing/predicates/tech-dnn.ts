import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/js/dnncore\\.js'),
    matchRegexInAttribute('script', 'src', '/js/dnn\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DotNetNuke'),
    matchRegexInInnerHTML('script', 'dnn.apiversion'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'DotNetNuke'),
    // in scripts

    // in html
    matchRegex('<!-- by DotNetNuke Corporation'),
    matchRegex('<!-- DNN Platform'),
    // in text

    // in css
])
