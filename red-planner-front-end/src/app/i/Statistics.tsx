'use client'
import { useProfile } from '@/hooks/useProfile'
import { Divide, Loader } from 'lucide-react'
import { NextPage } from 'next'

const Statistics = ({}) => {
    const {data, isLoading} = useProfile()
    
    return isLoading ? <Loader/> : (
        <div className='grid grid-cols-4 gap-12 mt-7'>
            {data?.statistics.length ? data.statistics.map(statistics => (
                <div className='bg-border/5 rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500' key={statistics.label}>
                    <div className='text-xl'>{statistics.label}</div>
                    <div className='text-3xl font-semibold'>{statistics.value}</div>
                </div>
            )) : <div>Statistics not loaded!</div>}
        </div>
    )
}

export default Statistics
