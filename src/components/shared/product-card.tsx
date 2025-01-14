import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import React from 'react'
import { Title } from './title'

interface Props {
	id: number
	name: string
	price: number
	imageUrl?: string
	className?: string
}

export const ProductCard: React.FC<Props> = ({
	id,
	name,
	price,
	imageUrl,
	className,
}) => {
	return (
		<div className={cn(className)}>
			<div className="flex justify-center p-6 bg-secondary rounded-lg">
				<img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
			</div>
			<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
			<p className="text-sm text-gray-400">
				Верхние ноты: Бергамот, лимон, нероли Ноты сердца: Жасмин, роза, ландыш
			</p>

			<div className="flex justify-between items-center mt-4">
				<span className="text-[20px]">
					от <b>{price} ₽</b>
				</span>

				<Button variant="secondary" className="text-base font-bold">
					<Plus size={20} className="mr-1" />
					Добавить
				</Button>
			</div>
		</div>
	)
}
