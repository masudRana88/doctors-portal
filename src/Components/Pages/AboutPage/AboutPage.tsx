import React from 'react';
import doc1 from "./../../../images/images/doc1.jpg"
import doc2 from "./../../../images/images/doc2.jpg"
import doc3 from "./../../../images/images/doc3.webp"
const AboutPage = () => {
    return (
        <div className='mt-[66px]'>
            <div className='flex flex-col items-center justify-center w-full px-4 -mt-4 bg-slate-400 h-96'>
              <h2 className='text-2xl font-bold text-white md:text-4xl'>About us</h2>
              <p className='mt-3 text-lg text-center text-white'>Some text about who we are and what we do. <br/>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div className='px-4 mt-10'>
              <h2 className='text-2xl font-bold text-center text-teal-400'>Our Doctor</h2>
              {/* Card body */}
              <div className='flex flex-col justify-center w-full gap-8 mt-10 md:flex-row'>
                {/* Card 1 start*/}
                <div className="flex justify-center">
                  <div className="max-w-sm bg-white rounded-lg shadow-lg">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src={doc1} alt=""/>
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium text-gray-900">Ari Clarke</h5>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Address : </span> 9C Roberts Meander Port Kadeville, NT 2605
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Phone : </span> 02-7868-0113
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Email : </span>enoch10@williamson.edu 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 1 end*/}
                {/* Card 2 start*/}
                <div className="flex justify-center">
                  <div className="max-w-sm bg-white rounded-lg shadow-lg">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src={doc2} alt=""/>
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium text-gray-900">Ari Clarke</h5>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Address : </span> 9C Roberts Meander Port Kadeville, NT 2605
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Phone : </span> 02-7868-0113
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Email : </span>enoch10@williamson.edu 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 2 end*/}
                {/* Card 3 start*/}
                <div className="flex justify-center">
                  <div className="max-w-sm bg-white rounded-lg shadow-lg">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                      <img className="rounded-t-lg" src={doc3} alt=""/>
                    </a>
                    <div className="p-6">
                      <h5 className="mb-2 text-xl font-medium text-gray-900">Ari Clarke</h5>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Address : </span> 9C Roberts Meander Port Kadeville, NT 2605
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Phone : </span> 02-7868-0113
                      </p>
                      <p className="mb-4 text-base text-gray-700">
                        <span className='font-semibold'>Email : </span>enoch10@williamson.edu 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 3 end*/}
              </div>
            </div>
        </div>
    );
};

export default AboutPage;