import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:wh(?:utils|ver|proxy|lang|topic|msg)|ehlpdhtm)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gbWhLang'),
    matchRegexInInnerHTML('script', 'gbWhMsg'),
    matchRegexInInnerHTML('script', 'gbWhProxy'),
    matchRegexInInnerHTML('script', 'gbWhUtil'),
    matchRegexInInnerHTML('script', 'gbWhVer'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Adobe RoboHelp(?: ([\\d]+))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
