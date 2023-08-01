import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'angular[.-]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/([\\d.]+(?:-?rc[.\\d]*)*)/angular(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '(?!angular\\.io)\\bangular.{0,32}\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'angular'),
    matchRegexInInnerHTML('script', 'angular.version.full'),
    // in meta

    // in scripts

    // in html
    matchRegex('<(?:div|html)[^>]+ng-app='),
    matchRegex('<ng-app'),
    // in text

    // in css
])
