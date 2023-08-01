import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api-secure\\.recaptcha\\.net'),
    matchRegexInAttribute('script', 'src', 'recaptcha_ajax\\.js'),
    matchRegexInAttribute('script', 'src', '/recaptcha/(?:api|enterprise)\\.js'),
    // in dom
    matchSelector(`#recaptcha_image, iframe[src*='.google.com/recaptcha/'], div.g-recaptcha`),
    // in js
    matchRegexInInnerHTML('script', 'Recaptcha'),
    matchRegexInInnerHTML('script', 'recaptcha'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '/recaptcha/api\\.js'),
    // in html

    // in text

    // in css
])
