import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 max-sm:mt-10'>
                    Hello, I am vamsi pursuing my BTech in VIT-AP in the stream of Computer Science and Engineering. I have prior knowledge on front end web technologies like HTML, CSS, JS, Figma.
                </p>
                <br />
                <p>While coming to my academics, I have an aggregate CGPA of 8.6 for my whole 2years of engineering. I am also a team player where I have worked as Co-lead for the tech WEB TEAM for an entire academic year in a CLUB called Photography-VIT AP in our university. </p>
                
            </div>
        </div>
    )
}

export default About
