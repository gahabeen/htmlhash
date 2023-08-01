import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'ProgId', '^Word\\.'),
    matchRegexInAttribute('meta', 'generator', 'Microsoft Word( [\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('(?:<html [^>]*xmlns:w="urn:schemas-microsoft-com:office:word"|<w:WordDocument>|<div [^>]*class="?WordSection1[" >]|<style[^>]*>[^>]*@page WordSection1)'),
    // in text

    // in css
])
