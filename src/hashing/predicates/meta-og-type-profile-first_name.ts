import { matchTagAttributesFuzzy } from '../matchers'

export const predicate = matchTagAttributesFuzzy('meta', { property: 'og:type', content: 'profile.first_name' })
