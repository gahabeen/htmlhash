import { HTMLElement } from 'node-html-parser'

export type PredicateContext = {
    html: string
    dom: HTMLElement
}

export type Predicate = (context: PredicateContext) => boolean

export type Hash = string;
export type HashBinaryArray = (0 | 1)[];
export type HashHex = string;
export type HashShortHex = string;
export type AnyHash = Hash | HashBinaryArray | HashHex | HashShortHex;