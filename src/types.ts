import { z } from 'zod';
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

export const ClusteringOptions = z.object({
    weights: z.array(z.number()).default([]),
    minHashWeight: z.number().default(4),
    minHashScore: z.number().default(0.08),
    medianHashWeight: z.number().default(38),
    medianHashScore: z.number().default(0.32),
    maxHashWeight: z.number().default(73),
    maxHashScore: z.number().default(0.48),
    scoreTreshold: z.number().default(0.84),
    confidenceTreshold: z.number().default(0.24),
}).default({});

export type ClusteringOptions = z.infer<typeof ClusteringOptions>;