import { Icon } from '@iconify/react'
import React from 'react'

const JobOverview = ({ jobDataId }) => {

    return (
        <>
            <div className='w-full h-auto border border-[#E7F0FA] rounded-[8px] p-[32px] max-sm:w-auto'>
                <h1 className='text-[#191F33] text-[20px] max-sm:text-center'>Job Overview</h1>

                <div className='flex flex-row flex-wrap gap-3 mt-[32px] text-[12px] cursor-default'>
                    {/* Job Posted */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 5H6C5.44772 5 5 5.44772 5 6V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V6C27 5.44772 26.5523 5 26 5Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 3V7" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 3V7" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 11H27" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>JOB POSTED:</p>
                    <p className='mt-1'>{ new Date(jobDataId.createdAt).toLocaleDateString('en-EN') }</p>
                    </div>
                    {/* Job Expire */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27Z" stroke="#0A65CC" strokeWidth="2" strokeMiterlimit="10"/>
                        <path d="M16 16L20.9497 11.0503" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 1H19" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>JOB EXPIRE IN:</p>
                    <p className='mt-1'>{ new Date(jobDataId.expired_at).toLocaleDateString('en-EN') }</p>
                    </div>
                    {/* Education */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2202_16861)">
                        <path d="M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.001 15.7891C24.3539 17.8991 20.2136 19.007 16 19.0004C11.7872 19.007 7.64755 17.8995 4.00085 15.7901" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 15H17.5" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2202_16861">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>EDUCATION:</p>
                    <p className='mt-1'> { jobDataId.education ? 'Graduation' : 'Undergraduate'} </p>
                    </div>
                    {/* Experience */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2202_16882)">
                        <path d="M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.001 15.7891C24.3539 17.8991 20.2136 19.007 16 19.0004C11.7872 19.007 7.64755 17.8995 4.00085 15.7901" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 15H17.5" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2202_16882">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>EXPERIENCE:</p>
                    <p className='mt-1'>{ jobDataId.experience >= 12 ? Math.floor(jobDataId.experience/12) : jobDataId.experience } Years</p>
                    </div>
                    {/* Job type */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2202_16877)">
                        <path d="M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.001 15.7891C24.3539 17.8991 20.2136 19.007 16 19.0004C11.7872 19.007 7.64755 17.8995 4.00085 15.7901" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 15H17.5" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2202_16877">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>JOB TYPE:</p>
                    <p className='mt-1'>{ Number(jobDataId.id) % 5 === 0 ? 'Contract' : Number(jobDataId.id) % 4 === 0 ? 'Remote' : Number(jobDataId.id) % 3 === 0 ? 'Intern' : Number(jobDataId.id) % 2 === 0 ? 'Full Time' : 'Freelance'  }</p>
                    </div>
                    {/* Location */}
                    <div className='min-w-[78px] max-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 29H25" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>LOCATION:</p>
                    <p className='mt-1'>{ jobDataId.location }</p>
                    </div>
                    {/* Category */}
                    <div className='min-w-[78px] max-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2202_16882)">
                        <path d="M27.001 9H5.00098C4.44869 9 4.00098 9.44772 4.00098 10V26C4.00098 26.5523 4.44869 27 5.00098 27H27.001C27.5533 27 28.001 26.5523 28.001 26V10C28.001 9.44772 27.5533 9 27.001 9Z" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 9V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H13C12.4696 5 11.9609 5.21071 11.5858 5.58579C11.2107 5.96086 11 6.46957 11 7V9" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.001 15.7891C24.3539 17.8991 20.2136 19.007 16 19.0004C11.7872 19.007 7.64755 17.8995 4.00085 15.7901" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 15H17.5" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2202_16882">
                        <rect width="32" height="32" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    
                    
                    <p className='text-[#767F8C] mt-3'>Category:</p>
                    <p className='mt-1'>{ jobDataId.category }</p>
                    </div>
                    {/* Salary */}
                    <div className='min-w-[78px]'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8V24C5 24.5304 5.21071 25.0391 5.58579 25.4142C5.96086 25.7893 6.46957 26 7 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V11C28 10.7348 27.8946 10.4804 27.7071 10.2929C27.5196 10.1054 27.2652 10 27 10H7C6.46957 10 5.96086 9.78929 5.58579 9.41421C5.21071 9.03914 5 8.53043 5 8ZM5 8C5 7.46957 5.21071 6.96086 5.58579 6.58579C5.96086 6.21071 6.46957 6 7 6H24" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M23 18C23 18.2761 22.7761 18.5 22.5 18.5C22.2239 18.5 22 18.2761 22 18C22 17.7239 22.2239 17.5 22.5 17.5C22.7761 17.5 23 17.7239 23 18Z" fill="#18191C" stroke="#0A65CC" strokeWidth="2"/>
                    </svg>
                    
                    <p className='text-[#767F8C] mt-3'>SALARY:</p>
                    <p className='mt-1'>$ { jobDataId.salary }/month</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobOverview