import Image, { StaticImageData } from 'next/image'

interface IButton {
    img: StaticImageData;
    count?: number;
}

const HeaderButton = ({img, count}: IButton) => {
  return (
    <div className='relative size-10 max-[872px]:size-8 flex items-center justify-center cursor-pointer hover:scale-[1.05] hover:duration-150'>
        <Image src={img} alt='...' className='size-8 max-[872px]:size-6' />
        {
            count !== undefined && <p className={`${count >= 10 ? "size-[25px] top-[-5px] right-[-5px]" : "size-5"} flex items-center justify-center rounded-full bg-[#F03D3D] absolute top-0 right-0 font-bold text-[14px] text-white`}>{count}</p>
        }
    </div>
  )
}

export default HeaderButton