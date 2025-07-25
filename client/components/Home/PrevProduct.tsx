import PrevProductUI from '@/ui/element/PrevProductUI'

import PrevFon1 from '@/assets/home/prev/prev_fon1.png'
import PrevFon2 from '@/assets/home/prev/prev_fon2.png'
import PrevFon3 from '@/assets/home/prev/prev_fon3.png'
import PrevGlasses1 from '@/assets/home/prev/prev_glasses1.png'
import PrevGlasses2 from '@/assets/home/prev/prev_glasses2.png'
import PrevGlasses3 from '@/assets/home/prev/prev_glasses3.png'

const PrevProduct = () => {
	return (
		<section className='containers flex gap-6 min-[1440px]:justify-center my-10 overflow-x-auto no-scrollbar snap-x'>
			<PrevProductUI
				prevFon={PrevFon1}
				prevGlasses={PrevGlasses1}
				title='Stefan Muller choice'
				name='The falcon'
				category='Bike glasses'
				desc='Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses'
				price={74.99}
			/>
			<PrevProductUI
				prevFon={PrevFon2}
				prevGlasses={PrevGlasses2}
				title='Chloe Kellerman'
				name='Force evo'
				category='SNOW GOGGLES'
				desc='Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses'
				price={74.99}
				black={true}
			/>
			<PrevProductUI
				prevFon={PrevFon3}
				prevGlasses={PrevGlasses3}
				title='Adrien Brodley'
				name='The line'
				category='Bike glasses'
				desc='Resistant and flexible TR-90 Frame, adjustable sylicon nose pads, interchangeble lenses 5+different lenses'
				price={74.99}
			/>
		</section>
	)
}

export default PrevProduct
