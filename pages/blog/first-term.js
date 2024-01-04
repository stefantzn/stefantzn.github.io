import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { Helmet } from 'react-helmet';


const FirstTerm = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <div>
      <Navbar />
      <Helmet>
        <title>1A Memo</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-end" style={{ minHeight: '50vh' }}>
        <motion.div
          className="text-center text-white"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-2">
            Reflection on 1A
          </h1>
          <p className="text-gray-500">Published on January 3, 2024</p>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-sm mb-2 text-white text-justify">
                What a semester. Taking a look back at my first 4 months of university, it was definitely
                a crazy experience. The semester was filled with many ups, many downs, many wins, and also many losses.
                Let's take a look back at my first term of Honours Computer Engineering at
                <span style={{ color: '#FDB515' }}> The University of Waterloo</span>. {/* Made "University of Waterloo" yellow */}
              </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/nightsky.jpeg"
          alt="Night Sky"
          width={500}
          height={500}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-1 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs text-white text-justify opacity-70">
            Night sky taken outside of E5 after a Linear Algebra Tutorial
          </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          First off, I just wanted to say that I did not expect to get into this university at all. Funny story,
          the day the Waterloo Engineering optional interview was due, I was laying in bed 2 hours before it was due contemplating
          whether I should even do it, as I doubted any chance I had getting into this university. I told myself "if you're not
          going to do it, when are you ever going to take action and do anything". After that moment, I did the interview
          unprepared and knew I bombed it. 4 months later, I got in.
                
          </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          Anyways, fast forward to September, and here I am, moving into residence and getting ready for my 1A term. Everything
          felt pretty fast going into the term. Assignments and homework started piling up fast, and although I was expecting 
          it from the start. Especially for engineering, that first year of university is going to be different for everybody,
          so it's really hard to prepare. 
                
          </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          After the first few weeks, you start to get the hang of everything. Since this was only the 1A term, most of this
          content taught in the courses at this point was mostly just high school review, so nobody was really during the time
          going into reading week. Calculus and Linear Algebra tutorials were straight forward for the most part and the programming
          assignments were easy. 
                
        </p>
      </motion.div>


      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <h1 className="text-4xl font-bold mb-2 text-white">
            First Hackathon
          </h1>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          Around end of september, I participated in the Velocity Innovation Challenge: Imagining the Future of Finance
          hackathon. My roommate told me to sign up, and we both got in. After a weekend of pure grind, we presented our 
          product and ended up winning 3rd place overall in the hackathon. If there is anything good that came out of this 
          semester, it would probably be this. I learned a lot of new things and my group's hard work definitely paid off.
                
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/hackathonteam.jpeg"
          alt="Hackathon Team"
          width={500}
          height={500}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-1 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs text-white text-justify opacity-70">
            My teammates and I before presenting
          </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          My roommate and I would end up doing the second Velocity Innovation Challenge that term with new team members,
          but unfortunately we didn't get selected as a top 8 team. There were some really incredible projects to show for, so I'm
          not suprised, congratulations to the winners.
                
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <h1 className="text-4xl font-bold mb-2 text-white">
            Exam Season
          </h1>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          Exams were definitely where the worst moments of the term occured. Especially during finals, I felt especially
          burnt out. I remember the feeling of finishing the semester reflection for my English course (my least favourite course)
          and just feeling unrecoverable burnout afterwards. I barely had any motivation to study for my final exams, and suddenly
          got into a "just-pass mindset".        
          
                
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          Despite all of that, I did pretty average in my courses, and there can definitely be room for improvement 
          going into the new term. I'm just glad I don't need to take English again, my professor was amazing, I just wasn't
          a fan of how the course was taught. 
          
                
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-4"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/ece150.jpg"
          alt="ECE150 Meme"
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-1 mx-auto max-w-sm"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs text-white text-center opacity-70">
              Our programming exam was so bad that our final mark got curved, credit toㅤ
              <a href="https://www.reddit.com/user/SomeGuySomeDude/" className="text-white underline">u/SomeGuySomeDude</a>
            </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <h1 className="text-4xl font-bold mb-2 text-white">
            Closing Thoughts
          </h1>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-2 text-white text-justify">

          Overall, the University of Waterloo is a great university, despite how challenging it may be, I don't
          see myself wanting to be anywhere else. I was set on Western University until I got my Waterloo offer, and
          I'm happy things worked out the way they did. This university may not have the prettiest campus, or the 
          best world-class education, but the community and opportunities that this university provides is unmatched.
                
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center justify-center mt-5 mx-auto max-w-2xl"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
      >
         <p className="text-xs mb-10 text-white text-justify">

         Up next, 1B.
                
        </p>
      </motion.div>
    </div>

    
  );
};

export default FirstTerm;
