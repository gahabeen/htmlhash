import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('Powered by\\s+(?:CERN )?<a href="http://(?:cdsware\\.cern\\.ch/indico/|indico-software\\.org|cern\\.ch/indico)">(?:CDS )?Indico( [\\d\\.]+)?\\;version:\\1'),
    // in text

    // in css
])
