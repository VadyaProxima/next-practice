import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-list-group'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />

			<Container className="pb-14 mt-10">
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex 1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Мужские духи"
								items={[
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},	
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title="Женские духи"
								items={[
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},	
									{
										id: 1,
										name: 'Savage',
										imageUrl:'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/de_DE/dwd422f8ce/Y0785220/Y0785220_E05_GHC.jpg?sw=1850&sh=1850',										
										price: 7800,
										items: [{ price: 7800 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
