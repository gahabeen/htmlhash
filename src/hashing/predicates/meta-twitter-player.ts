import { matchTagAttributesFuzzy } from '../matchers'

export const predicate = matchTagAttributesFuzzy('meta', { name: 'twitter:player' })
