import { cn } from '@/lib/utils'
import React from 'react'
import { Categories, Container, SortPopup } from './'
interface Props {
	className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
	return <>
    <div className={cn('sticky top-0  py-5 shadow-lg shadow-black/30     z-10' , className   )}>
    <Container className='flex justify-between items-center '>
        <Categories/>
        <SortPopup/>
    </Container>

    
    </div>  
    </> 
}