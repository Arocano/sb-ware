'use client'

import Image from 'next/image'
import Exit from '@public/assets/icons/exit-icon.png'
import { useRouter } from 'next/navigation'

const ExitIcon = () => {

  const router = useRouter()
  
  return (
    <div className='btn-icon' id="exit" onClick={()=>router.push('/')}>
        <Image src={Exit} width={24} height={'auto'} alt="Exit"/>
    </div>
  )
}

export default ExitIcon