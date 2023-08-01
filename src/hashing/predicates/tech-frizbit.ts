import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.frizbit\\.com/'),
    // in dom
    matchSelector(`link[href*='cdn.frizbit.com']`),
    // in js
    matchRegexInInnerHTML('script', 'frizbit.configurationManager'),
    matchRegexInInnerHTML('script', 'frizbit.remoteConfigs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
