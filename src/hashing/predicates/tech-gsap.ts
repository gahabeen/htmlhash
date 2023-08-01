import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'TweenMax(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TweenLite.version'),
    matchRegexInInnerHTML('script', 'TweenMax.version'),
    matchRegexInInnerHTML('script', 'gsap.version'),
    matchRegexInInnerHTML('script', 'gsapVersions'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
