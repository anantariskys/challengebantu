import Button from '@/components/Button'
import React from 'react'

const CTA = () => {
  return (
    <section className='md:py-24 py-10 bg-white'>
        <main className='container grid md:grid-cols-2 gap-6'>
            {/* Bagian Kandidat */}
            <div className='p-12 rounded-md w-full space-y-4 bg-[#E4E5E8] shadow-lg'>
                <h3 className='text-xl font-semibold text-gray-900'>Cari Pekerjaan Impianmu!</h3>
                <p className='text-sm text-gray-700'>
                    Dapatkan kesempatan bekerja di perusahaan terbaik dan tingkatkan kariermu bersama kami. 
                    Ribuan lowongan kerja menantimu!
                </p>
                <Button 
                    icon={"mingcute:arrow-right-fill"} 
                    className='text-sm font-medium' 
                    iconPosition='right'
                >
                    Daftar Sekarang
                </Button>
            </div>

            {/* Bagian Pemberi Kerja */}
            <div className='p-12 rounded-md w-full space-y-4 bg-primary text-white shadow-lg'>
                <h3 className='text-xl font-semibold'>Temukan Kandidat Terbaik!</h3>
                <p className='text-sm'>
                    Posting lowongan dengan mudah dan jangkau ribuan kandidat potensial yang siap bergabung 
                    dengan tim hebat Anda!
                </p>
                <Button 
                    variant='tertiary' 
                    icon={"mingcute:arrow-right-fill"} 
                    className='text-sm font-medium' 
                    iconPosition='right'
                >
                    Pasang Lowongan
                </Button>
            </div>
        </main>
    </section>
  )
}

export default CTA
