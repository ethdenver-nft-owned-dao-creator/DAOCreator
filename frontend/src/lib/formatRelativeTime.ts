const units = [
	['year', 31536000000],
	['month', 2628000000],
	['day', 86400000],
	['hour', 3600000],
	['minute', 60000],
	['second', 1000],
] as const

export const formatRelativeTime = (
	d1: number,
	d2: number = Date.now(),
	{
		style = 'narrow',
		resolution = 6,
		locale = 'en'
	}: {
		style?: 'long' | 'short' | 'narrow',
		resolution?: number,
		locale?: string
	} = {}
): string => {
	let elapsed = Math.max(d1 - d2, 0)
	const sign = Math.sign(d1 - d2)

	const result = []
	for (const [unit, amount] of units)
		if (Math.abs(elapsed) >= amount || (!result.length && unit === 'second')){
			result.push(
				new Intl.RelativeTimeFormat(locale, { style }).format(sign * Math.floor(elapsed / amount), unit)
			)

			if(--resolution === 0)
				break
			
			elapsed %= amount
		}
	
	return result
		.map(string => string.replace(/^in | ago$/, ''))
		.join(' ')
		.replace(/\./g, '')
}
