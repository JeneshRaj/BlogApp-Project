import React from 'react'

function About() {
  return (
    <>
     <div className="py-16 bg-black text-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img className='rounded-full '
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-white-600">
                        Becoming a React Developer with no prior experience is a realistic goal, but it requires dedication and strategic learning. Start by gaining a solid understanding of JavaScript, as it's the foundation of React. Then, dive into React through online tutorials, courses, and hands-on projects.
                        </p>
                        <p className="mt-4 text-white-600">
                        Let's kick off our exploration by uncovering the earning potential of React developers in 2024. React development ranks among the highest-paying remote tech jobs, making it an attractive choice for developers seeking remote opportunities with the highest-paying remote tech jobs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
