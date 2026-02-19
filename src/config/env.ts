import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

export const env = createEnv({
	/**
	 * Define your server-side environment variables here.
	 * This ensures the app doesn't run with invalid environment variables.
	 */
	server: {
		BETTER_AUTH_URL: z.url(),
		BETTER_AUTH_SECRET: z.string().min(1),
		DATABASE_URL: z.url(),
		NODE_ENV: z
			.enum(['development', 'test', 'production'])
			.default('development'),
	},

	/**
	 * Define your client-side environment variables here.
	 * These variables must be prefixed with `NEXT_PUBLIC_` to be exposed to the client.
	 */
	client: {},

	/**
	 * This object specifies how to retrieve the environment variables from `process.env`.
	 * We manually destructure them here for validation.
	 */
	runtimeEnv: {
		BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
		BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
		DATABASE_URL: process.env.DATABASE_URL,
		NODE_ENV: process.env.NODE_ENV,
	},
})
