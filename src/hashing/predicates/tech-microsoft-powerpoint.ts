import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'ProgId', '^PowerPoint\\.'),
    matchRegexInAttribute('meta', 'generator', 'Microsoft PowerPoint ( [\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex(
        '(?:<html [^>]*xmlns:w="urn:schemas-microsoft-com:office:powerpoint"|<link rel="?Presentation-XML"? href="?[^"]+\\.xml"?>|<o:PresentationFormat>[^<]+</o:PresentationFormat>[^!]+<o:Slides>\\d+</o:Slides>(?:[^!]+<o:Version>([\\d.]+)</o:Version>)?)\\;version:\\1'
    ),
    // in text

    // in css
])
