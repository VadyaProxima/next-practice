'use client';
import React from 'react'
import { Input } from '../ui'
import { RangeSlider } from '../ui/range-slider'
import { FilterCheckbox, Title } from './'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<>
			<div className={className}>
				<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
				<div className="flex flex-col gap-4">
					<FilterCheckbox text="Бестселлеры" value="1" />
					<FilterCheckbox text="Новинки" value="2" />
				</div>
				<div className="mt-5 py-6 pb-7">
					<p className="font-bold mb-3">Цена от и до:</p>
					<div className="flex gap-3 mb-5">
						<Input
							type="number"
							placeholder="0"
							min={0}
							max={1000}
							defaultValue={0}
						/>
						<Input type="number" min={100} max={1000} placeholder="1000" />
					</div>
					<RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
				</div>
				<CheckboxFiltersGroup
					className="mt-5"
					title="Ароматы"
					limit={6}
					defaultItems={[
						{
							text: 'Бергамот',
							value: '1',
						},
						{
							text: 'Лимон',
							value: '2',
						},
						{
							text: 'Жасмин',
							value: '3',
						},
						{
							text: 'Ландыш',
							value: '4',
						},
						{
							text: 'Роза',
							value: '5',
						},
						{
							text: 'Нероли',
							value: '6',
						},
					]}
					items={[
						{
							text: 'Бергамот',
							value: '1',
						},
						{
							text: 'Лимон',
							value: '2',
						},
						{
							text: 'Жасмин',
							value: '3',
						},
						{
							text: 'Ландыш',
							value: '4',
						},
						{
							text: 'Роза',
							value: '5',
						},
						{
							text: 'Нероли',
							value: '6',
						},

						{
							text: 'Бергамот',
							value: '1',
						},
						{
							text: 'Лимон',
							value: '2',
						},
						{
							text: 'Жасмин',
							value: '3',
						},
						{
							text: 'Ландыш',
							value: '4',
						},
						{
							text: 'Роза',
							value: '5',
						},
						{
							text: 'Нероли',
							value: '6',
						},
					]}
				/>
			</div>
		</>
	)
}
