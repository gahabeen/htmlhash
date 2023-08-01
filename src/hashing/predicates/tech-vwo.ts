import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'dev\\.visualwebsiteoptimizer\\.com/'),
    matchRegexInAttribute('script', 'src', '/visual-website-optimizer/([\\d\\.])\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'VWO'),
    matchRegexInInnerHTML('script', '__vwo'),
    matchRegexInInnerHTML('script', '_vwo_code'),
    matchRegexInInnerHTML('script', '_vwo_settings_timer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
