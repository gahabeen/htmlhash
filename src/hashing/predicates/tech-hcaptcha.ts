import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'hcaptcha\\.com/([\\d]+?)/api\\.js\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='hcaptcha.com']`),
    // in js
    matchRegexInInnerHTML('script', 'hcaptcha.getRespKey'),
    matchRegexInInnerHTML('script', 'hcaptchaOnLoad'),
    matchRegexInInnerHTML('script', 'hcaptcha_sitekey'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('#cf-hcaptcha-container'),
])
