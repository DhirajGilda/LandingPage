import React from 'react'

const Contactus = () => {
  return (
        <section id="contactus" className='m-8 p-14 '>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm  shadow-[#77b036] backdrop-filter backdrop-blur-lg rounded-[20px]">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#292d0d]">Contact Us</h2>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-bold text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-[#292d0d] border-[#292d0d] text-[#292d0d] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#292d0d] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-white ">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#292d0d] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-bold text-white ">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#292d0d] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-lg font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-[#292d0d] dark:hover:bg-[#292d0d] dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
  )
}

export default Contactus