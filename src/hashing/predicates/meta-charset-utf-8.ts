import { matchTagAttributesFuzzy } from '../matchers'

export const predicate = matchTagAttributesFuzzy('meta', { charset: 'utf-8' })
