import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'ProgId', '^Excel\\.'),
    matchRegexInAttribute('meta', 'generator', 'Microsoft Excel( [\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex(
        '(?:<html [^>]*xmlns:w="urn:schemas-microsoft-com:office:excel"|<!--\\s*(?:START|END) OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD\\s*-->|<div [^>]*x:publishsource="?Excel"?)'
    ),
    // in text

    // in css
])
