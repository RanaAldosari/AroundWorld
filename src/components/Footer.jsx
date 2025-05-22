import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-blue-200 text-white py-5 mt-7'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
  <div className='mb-6 sm:mb-0'>
    <p className='text-xl font-semibold mb-4'> تواصل معنا</p>
      <div className='flex gap-4 items-center'>
        {/* icons */}
       <i className="fab fa-facebook text-2xl hover:text-blue-600  duration-400"></i>
       <i className="fa-brands fa-x-twitter hover:text-blue-600  duration-400"></i>
       <i className="fab fa-instagram text-2xl hover:text-blue-600  duration-400"></i>
        <i className="fab fa-linkedin text-2xl hover:text-blue-600  duration-400"></i>
   </div>
</div>
{/*  */}
<div className='text-center sm:text-left'>
     <p className='text-xl font-semibold mb-4'>اشترك في النشرة البريدية</p>

       <form action="/subscribe" method="POST" className='flex items-center'>
          <button type="submit" className='bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300' >اشترك الآن </button>
           <input type="email" name="email" placeholder=" البريد الإلكتروني"required className='p-2 rounded-l-lg border-1'/>
      </form>
            </div>
          </div>
 <hr className="my-6 border-gray-400" />
<div className='text-center'>
    <h2 className='text-sm'> جميع الحقوق محفوظة @لفة حول العالم 2025  </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
