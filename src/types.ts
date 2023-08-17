import { z } from 'zod';

export type Id = string;
export type Tag = string;
export type Attribute = string;
export type Index = number;
export type Count = number;

export type HashVector = number[];
export type AnyHashWithValues = { hash: HashVector, squarred?: number }

export const ClusteringOptions = z.object({
    scoreTreshold: z.number().default(0.745),
}).default({});

export type ClusteringOptions = z.infer<typeof ClusteringOptions>;