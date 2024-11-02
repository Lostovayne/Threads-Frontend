export interface Post {
	id: string
	urlProfile: string
	name: string
	date: string
	description: string
	media?: string[]
	reactions?: {
		likes?: number
		comments?: number
		reposts?: number
		shares?: number
	}
}