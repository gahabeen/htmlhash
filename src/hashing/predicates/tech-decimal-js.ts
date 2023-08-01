import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'decimal[.-]([\\d.]*\\d+)(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/([\\d.]*\\d+)/decimal(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'decimal(?:\\.min)?\\.js(?:\\?ver(?:sion)?=([\\d.]*\\d+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Decimal.ROUND_HALF_FLOOR'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
