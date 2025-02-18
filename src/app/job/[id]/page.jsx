  'use client'

  import { Icon } from "@iconify/react";
  import { useParams } from 'next/navigation'
  import React from 'react'

  const page = () => {
      const {id} = useParams()

    return (
      <div className="container mx-auto px-4 py-8">
    {/* Header Section */}
    <section className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-medium text-[#0A142F]">Related Jobs</h1>
      <div className="flex gap-2">
        <button className="p-3 bg-[#E8F1FF] rounded-lg hover:bg-blue-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="-5 -5 24 24">
            <path fill="currentColor" d="m3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2z"/>
          </svg>
        </button>
        <button className="p-3 bg-[#E8F1FF] rounded-lg hover:bg-blue-100 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="-5 -5 24 24">
            <path fill="currentColor" d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"/>
          </svg>
        </button>
      </div>
    </section>

    {/* Jobs Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Job Card 1 */}
  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3"> {/* Container untuk logo dan nama perusahaan */}
        <img src="/freepik.png" alt="Freepik Logo" className="h-12 w-auto" />
        <span className="text-lg font-medium text-gray-800">Freepik</span> {/* Nama perusahaan */}
      </div>
      <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>China
          </span>
    </div>
    <h3 className="text-lg font-semibold mb-2">Visual Designer</h3>
    <div className="flex justify-between items-center">
      <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
      <p className="text-blue-600 font-bold">$10K-$15K</p>
    </div>
  </div>
      {/* Job Card 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
          <img src="/instagram.png/" alt="instagram Logo" className="h-12 w-auto" />
          <span className="text-lg font-medium text-gray-800">Instagram</span> {/* Nama perusahaan */}
          </div>
          <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>Australia
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Frontend Developer</h3>
        <div className="flex justify-between items-center">
        <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">Contract Base</span>
          <p className="text-blue-600 font-bold">$10K-$15K</p>
        </div>
      </div>

      {/* Job Card 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
        <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
        <img src="/upwork.png/" alt="upwork Logo" className="h-12 w-auto" />
          <span className="text-lg font-medium text-gray-800">Upwork</span> {/* Nama perusahaan */}
          </div>
          <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>France
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Techincal Support Specialist</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
          <p className="text-blue-600 font-bold">$10K-$15K</p>
        </div>
      </div>
      
      {/* Job Card 4 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
        <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
        <img src="/facebook.png/" alt="facebook Logo" className="h-12 w-auto" />
          <span className="text-lg font-medium text-gray-800">Facebook</span> {/* Nama perusahaan */}
          </div>
          <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>United Kingdom
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Software Engineer</h3>
        <div className="flex justify-between items-center">
        <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Part Time</span>
          <p className="text-blue-600 font-bold">$10K-$15K</p>
        </div>
      </div>

      {/* Job Card 5 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
        <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
        <img src="/microsoft.png/" alt="microsoft Logo" className="h-12 w-auto" />
          <span className="text-lg font-medium text-gray-800">Microsoft</span> {/* Nama perusahaan */}
          </div>
          <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>Australia
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Product Designer</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
          <p className="text-blue-600 font-bold">$10K-$15K</p>
        </div>
      </div>

      {/* Job Card 6 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#E4E5E8]">
        <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
        <img src="/youtube.png/" alt="Youtube Logo" className="h-12 w-auto" />
          <span className="text-lg font-medium text-gray-800">Youtube</span> {/* Nama perusahaan */}
          </div>
          <span className="flex items-center text-sm text-gray-500">
              <Icon icon="ion:location-outline" className="mr-1 w-5 h-5"/>Germany
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">Interaction Designer</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Full Time</span>
          <p className="text-blue-600 font-bold">$10K-$15K</p>
        </div>
      </div>

    </div>
  </div>
    )
  }

  export default page
