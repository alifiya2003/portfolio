"use client";
import { motion, useScroll, useInView } from "framer-motion";
import Brain from "@/components/brain";
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container:containerRef})
    //console.log(scrollYProgress)

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, {once:true});
    //const isSkillRefInView = useInView(skillRef, {margin:"-100px"}, {once:true});

    const experienceRef = useRef()
    //const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"});
    const isExperienceRefInView = useInView(experienceRef, {once:true});

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER  */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER  */}
                <div className="p-4 sm:p8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* BIOGRAPHY CONTAINER  */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY TITLE  */}
                        <h1 className="font-bold text-2xl">BIOGRAHPY</h1>
                        {/* BIOGRAPHY DESCRIPTION  */}
                        <p className="text-lg">
                            Alifiya Biscuitwala is an enthusiastic computer science student at
                            Arizona State University, with a perfect 4.00 GPA and a passion for
                            artificial intelligence and machine learning. She has honed her skills
                            in various programming languages such as Java, Python, and C++, and has
                            experience in front-end development using React.JS. Her academic journey
                            includes impactful research in robotics and hands-on projects like
                            building a Web3 crowdfunding platform. Alifiyas deep curiosity for
                            innovative tech solutions drives her constant learning and growth.
                            Fun fact: shes a whisky lover and a proud cat enthusiast!
                        </p>
                        {/* BIOGRAPHY QUOTE  */}
                        <span className="italic">
                            WRITE A GOOD QUOTE !!
                        </span>
                        {/* BIOGRAPHY SIGNATURE */}
                        <div className="self-end">
                            <svg
                                width="185"
                                height="77"
                                viewBox="0 0 370 114"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M55 8C55 39.1855 53.3214 69.1189 45.6667 99.5556C45.6078 99.7897 43.9403 110.384 42.5556 107.778C40.6578 104.205 41.0379 99.5339 41 95.6667C40.8904 84.4897 40.8912 73.2871 41.0556 62.1111C41.2906 46.1283 43.1686 29.7935 48.8889 14.7778C50.0888 11.6279 51.6588 4.04913 56 3.22222C58.7305 2.70213 62.1964 10.94 62.5556 11.6667C69.9118 26.5517 74.3475 42.5349 79.2222 58.3333C82.7769 69.8536 86.7656 80.9941 91.6667 92C91.8749 92.4675 94.7256 96.8367 92.8333 94.9444C86.6143 88.7254 77.0148 85.3466 69.5556 80.9444C64.1496 77.7541 59.0052 74.1173 53.1111 71.8333C47.9965 69.8514 42.453 69.0855 37.2222 67.4444C33.2572 66.2005 33.2887 67.6148 38.1111 68.4444C46.9429 69.9639 56.02 70.7053 65 69.8889C72.7563 69.1838 81.1994 62.6839 86.7222 57.5556C92.279 52.3957 94.927 44.7352 95.7778 37.3333C96.3731 32.1544 96.2679 26.5423 95.2222 21.4444C94.992 20.3222 93.3719 17.1142 93.0556 20.2778C91.2262 38.5709 90.2159 56.6441 93.5 74.8889C93.9381 77.323 95.1567 86.9226 98.0556 87.8889C100.96 88.8571 104.794 83.3873 106 81.5556C110.566 74.6195 112.811 62.77 113 54.4444C113.108 49.673 114.289 42.2028 112.444 37.7222C110.884 33.9329 110.119 40.6334 110.056 41.6111C109.623 48.3126 110.455 54.7175 112 61.2222C112.509 63.3652 117.256 79.2881 120.556 72.3889C127.856 57.1237 128.128 41.7082 128 25.1111C127.944 17.8433 125.356 -3.48416 124.056 3.66667C122.464 12.4197 125.258 23.1205 126.5 31.7222C128.941 48.6186 134.09 64.8384 138.333 81.3333C140.779 90.8404 143.103 102.65 149 110.778C149.879 111.99 153.879 118.226 154 114C154.413 99.5301 150.26 81.0144 143 68.6111C140.483 64.3112 138.057 60.3347 134.944 56.4444C131.733 52.4303 128.795 50.8973 134.556 53.7778C137.041 55.0208 155.308 62.7305 157.5 58.8333C159.438 55.3888 159.315 50.7868 158.444 47.0556C158.353 46.662 156.684 40.7028 156.222 41.2222C153.294 44.5161 160.128 54.1983 161.056 57.4444C161.632 59.4634 163 55.5407 163 54.9444C163 53.9815 163.172 46.5226 163.444 46.6667C166.849 48.4689 168.422 60.2714 169.889 63.5556C175.244 75.545 176.858 88.0039 181.389 100.167C181.999 101.805 184.85 106.944 180.778 105.833C174.98 104.252 171.873 100.848 170 95.3333C160.467 67.2627 195.236 42.1394 210.778 23.4444C213.738 19.8832 218.604 13.7286 216.556 8.66667C214.883 4.53324 205.815 5.32195 202.889 7.33333C184.425 20.0274 205.204 46.2809 216.556 55C218.902 56.8022 226.846 59.8944 223.889 60C206.308 60.6279 189.884 64.5722 173.222 70.1667C155.546 76.1018 139.058 84.796 122.556 93.3889C101.49 104.358 80.858 115.829 60.9444 128.778C48.4794 136.883 36.0863 145.07 23.3333 152.722C17.4713 156.239 15.532 157.348 9.83334 160.5C9.77516 160.532 2.89552 163.605 2.44445 164.778C1.42693 167.423 8.09844 164.275 10.8889 163.778C18.5817 162.406 25.9514 160.166 33.4444 158C64.4142 149.048 95.7359 141.851 126.167 131C144.237 124.556 162.396 118.198 180.667 112.333C184.677 111.046 189.758 108 194 108"
                                    stroke="black"
                                    strokeWidth="2" />
                            </svg>

                        </div>
                        {/* BIOGRAPHY SCROLL SVG  */}
                        <motion.svg
                            initial={{ opacity:0.2, y:0}}
                            animate={{ opacity:1, y: "10px"}}
                            transition={{ repeat:Infinity, duration:3, ease:"easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>

                    </div>
                    {/* SKILLS CONTAINER  */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* SKILL TITLE  */}
                        <motion.h1 
                            initial={{x:"-300px"}} 
                            animate={isSkillRefInView ? {x:0} : {}} 
                            transition={{delay: 0.1}}
                            className="font-bold text-2xl"
                        >SKILLS</motion.h1>
                        {/* SKILL LIST  */}
                        <motion.div className="flex gap-4 flex-wrap"
                            initial={{x:"-300px"}} 
                            animate={isSkillRefInView ? {x:0} : {}}
                        >
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Python
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                C/C++
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Bash
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                prolog
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                scheme
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.JS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Bootstrap
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                GitHub
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Windows
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MacOS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                linux/Unix
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Microsoft Office Tools
                            </div>
                            
                            
                            

                        </motion.div>
                        {/* SKILL SCROLL SVG  */}
                        <motion.svg
                            initial={{ opacity:0.2, y:0}}
                            animate={{ opacity:1, y: "10px"}}
                            transition={{ repeat:Infinity, duration:3, ease:"easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER  */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        {/* EXPERIENCE TITLE  */}
                        <motion.h1 
                            initial={{x:"-300px"}} 
                            animate={isExperienceRefInView ? {x:0} : {}}
                            transition={{delay:0.1}}
                            className="font-bold text-2xl"
                            >EXPERIENCE</motion.h1>
                        {/* EXPERIENCE LIST  */}
                        <motion.div 
                            initial={{x:"-300px"}} 
                            animate={isExperienceRefInView ? {x:0} : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM 1 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT  */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                    {/* JOB DESCRIPTION  */}
                                    <div className="p-3 text-sm italic">
                                        This was a good job. Need to update it.
                                    </div>
                                    {/* JOB DATE  */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                                    {/* JOB COMPANY  */}
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                                </div>
                                {/* CENTER  */}
                                <div className="w-1/6">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT  */}
                                <div className="w-1/3"></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM 2 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT  */}
                                <div className="w-1/3"></div>
                                {/* CENTER  */}
                                <div className="w-1/6">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT  */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                    {/* JOB DESCRIPTION  */}
                                    <div className="p-3 text-sm italic">
                                        This was a good job. Need to update it.
                                    </div>
                                    {/* JOB DATE  */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                                    {/* JOB COMPANY  */}
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM 3 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT  */}
                                <div className="w-1/3">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                                    {/* JOB DESCRIPTION  */}
                                    <div className="p-3 text-sm italic">
                                        This was a good job. Need to update it.
                                    </div>
                                    {/* JOB DATE  */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                                    {/* JOB COMPANY  */}
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">Apple</div>
                                </div>
                                {/* CENTER  */}
                                <div className="w-1/6">
                                    {/* LINE  */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT  */}
                                <div className="w-1/3"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER  */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>

    )
}

export default AboutPage