import { anyOf, matchSelector } from '../matchers'

export const predicate = anyOf([matchSelector('[itemprop="actionableFeedbackPolicy"]')])
