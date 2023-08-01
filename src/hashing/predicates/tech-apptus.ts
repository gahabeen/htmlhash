import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.esales\\.apptus\\.com.+(?:apptus-esales-api-([\\d.]+))\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ApptusEsales'),
    matchRegexInInnerHTML('script', 'apptusConfig'),
    matchRegexInInnerHTML('script', 'apptusDebug'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
