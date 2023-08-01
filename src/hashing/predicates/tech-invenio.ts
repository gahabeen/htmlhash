import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex(
        '(?:Powered by|System)\\s+(?:CERN )?<a (?:class="footer" )?href="http://(?:cdsware\\.cern\\.ch(?:/invenio)?|invenio-software\\.org|cern\\.ch/invenio)(?:/)?">(?:CDS )?Invenio</a>\\s*v?([\\d\\.]+)?\\;version:\\1'
    ),
    // in text

    // in css
])
