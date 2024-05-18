import Image from 'next/image'
import Exit from '@public/assets/icons/exit-icon.png'

const ExitIcon = () => {
  return (
    <div className='btn-icon' id="exit">
        <Image src={Exit} width={24} height={'auto'} alt="Exit"/>
    </div>
  )
}

export default ExitIcon