'use client';

import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui'
import { useCategoryStore } from '../../../store/category';

interface Props {
	className?: string
}

const cats = [
    { id: 1, name: 'Мужские духи' },
    { id: 2, name: 'Женские духи' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' },
    { id: 8, name: 'Десерты' },
]


export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);
	return (
		<div
			className={cn('inline-flex gap-1 bg-slate-800 p-1 rounded-2xl', className)}
		>
			{cats.map(({name, id}, index) => (
				<a
					className={cn(
						'flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
							
					)}
					href={`/#${name}`}
					key={index}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	)
}