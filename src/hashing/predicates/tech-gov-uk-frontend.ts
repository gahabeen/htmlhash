import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GOVUKFrontend'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href=[^>]*?govuk-frontend(?:[^>]*?([0-9a-fA-F]{7,40}|[\\d]+(?:.[\\d]+(?:.[\\d]+)?)?)|)[^>]*?(?:\\.min)?\\.css\\;version:\\1'),
    matchRegex('<body[^>]+govuk-template__body\\;confidence'),
    matchRegex('<a[^>]+govuk-link\\;confidence'),
    // in text

    // in css
])
