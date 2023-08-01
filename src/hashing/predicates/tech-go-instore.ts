import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//gis\\.goinstore\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GISAPP.videoJsCtrl'),
    matchRegexInInnerHTML('script', 'gisAppLib.postRobot'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
