import { Icon } from "@iconify/react"; 
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0A142F] text-white py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
      {/* MyJob Section */}
      <div>
        <h3 className="flex text-xl font-semibold mb-4"><Icon icon="tabler:briefcase" className="mr-3 w-8 h-8"/> MyJob</h3>
        <p className="text-sm text-gray-400 mt-2">Call now: <span className='font-semibold text-white mt-2'>(319) 555-0116</span></p>
        <p className="text-sm text-gray-400">6391 Elgin St. Celina, Delaware 10299, New <br/>
          York, United States of America</p>
      </div>

       {/* Quick Link Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Quick Link</h3> 
    <ul className="space-y-1"> {/* Mengurangi space-y dari 2 ke 1 */}
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">About</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Pricing</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Jobs</a></li>
    </ul>
  </div>

  {/* Candidate Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Candidate</h3> 
    <ul className="space-y-1"> 
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Browse Jobs</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Browse Employers</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Candidate Dashboard</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Saved Jobs</a></li>
    </ul>
  </div>

  {/* Employers Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Employers</h3> {/* Mengurangi margin-bottom dari 4 ke 2 */}
    <ul className="space-y-1"> {/* Mengurangi space-y dari 2 ke 1 */}
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Post a Job</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Browse Candidates</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Employee Dashboard</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Applications</a></li>
    </ul>
  </div>

  {/* Support Section */}
  <div>
    <h3 className="text-xl font-bold mb-2">Support</h3> {/* Mengurangi margin-bottom dari 4 ke 2 */}
    <ul className="space-y-1"> {/* Mengurangi space-y dari 2 ke 1 */}
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Faqs</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
      <li><a href="#" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</a></li>
    </ul>
  </div>
</div>

   {/* Copyright Section */}
<div className="border-t border-gray-700 mt-0 pt-2 mb-0 pb-0 flex justify-between items-center">
  <p className="text-sm text-gray-400">© 2024 MyJob - Job Portal. All rights Reserved</p>
  <div className="flex space-x-4">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:instagram" className="text-gray-400 hover:text-white w-5 h-5" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:facebook" className="text-gray-400 hover:text-white w-5 h-5" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:youtube" className="text-gray-400 hover:text-white w-5 h-5" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <Icon icon="mdi:twitter" className="text-gray-400 hover:text-white w-5 h-5" />
    </a>
  </div>
</div>
  </div>
</footer>
  )
}

export default Footer
