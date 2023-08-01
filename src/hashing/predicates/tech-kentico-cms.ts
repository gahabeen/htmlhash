import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/CMSPages/GetResource\\.ashx'),
    matchRegexInAttribute('script', 'src', '/kentico\\.resource'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CMS.Application'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Kentico CMS ([\\d.R]+ \\(build [\\d.]+\\))\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
