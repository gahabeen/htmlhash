import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MonacoEnvironment'),
    matchRegexInInnerHTML('script', 'apex.libVersions.monacoEditor'),
    matchRegexInInnerHTML('script', 'monaco.editor'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('\\.monaco-editor'),
])
