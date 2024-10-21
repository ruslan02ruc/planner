import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Heading } from '@/components/ui/Heading'
import Statistics from './Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return <div>
		<Heading title='Статистика'/>
		<Statistics/>
	</div>
}