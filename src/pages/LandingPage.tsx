// import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { t } from "i18next";

import { TiArrowRightThick } from "react-icons/ti";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <div className=" p-10 min-h-[650px] relative overflow-hidden">
          <img  className="hidden sm:inline-block md:w-[130px] absolute right-0 bottom-10 md:top-3/5 transform-[rotate(0deg)] lg:z-10"  src="../images/img-5.svg" alt="" />

          <img  className="hidden sm:inline-block md:w-[180px] absolute left-0 top-2/5 transform-[rotate(0deg)] lg:z-20"  src="../images/img-2.svg" alt="" />

         
          <div className="absolute inset-y-3  left-1/2 top-3 w-[calc(100%-24px)] max-w-screen-2xl -translate-x-1/2  rounded-[2rem] bg-gradient-to-b from-brand-blue-700/[0.06] to-white sm:inset-y-5 sm:w-[calc(100%-40px)] border border-gray-100 shadow bg-primary/10 px-2 py-3 sm:p-4">
            <img
              alt=""
              loading="lazy"
              width="1416"
              height="675"
              decoding="async"
              data-nimg="1"
              className="ease-out-smooth transition-opacity duration-300 pointer-events-none max-w-none absolute left-1/2 top-0 -translate-x-1/2"
              src="https://portrait.so/images/rainbow-beams.webp"
            ></img>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center text-center mt-36">
                <div>
                  <div className="group inline-flex items-center gap-1 rounded-full bg-gray-10 py-1 pl-4 pr-1 text-sm/none font-medium text-gray-500 ring-1 ring-black/10  ">
                    <span>Centralized health. Optimized safety.</span>
                    <span className="inline-flex size-6 items-center justify-center rounded-full border border-transparent transition-colors group-hocus:border-brand-blue-1000/10 group-hocus:bg-brand-blue-1000/5"></span>
                  </div>

                  <h1
                    className="max-w-[1000px] text-center text-pretty text-4xl sm:text-5xl lg:text-7xl mt-6
           font-semibold text-secondary leading-[115%]"
                  >
                    Digitize Occupational{" "}
                    <span className="bg-rainbow-highlights -mx-[0.25em] px-[0.25em] font-junicode text-junicode-with-basier font-semibold italic [--angle:165deg] [--stop-1:20%] [--stop-2:40%] [--stop-3:46%] [--stop-4:60%] [--stop-5:69%] [--stop-6:80%]">
                      Health & Safety
                    </span>{" "}
                    with{" "}
                    <span className="relative">
                      MediWork{" "}
                      <sup className="text-2xl absolute font-semibold -right-9 top-2">
                        SM
                      </sup>
                    </span>
                  </h1>
                  <p className="mx-auto max-w-md text-balance text-lg mt-6 text-[#08304ca6] text-center">
                    Centralize HSE workflows, ensure compliance, and unlock
                    data-driven decisions.
                  </p>

                  <div className=" flex items-center justify-center gap-4 mt-10">
                    <motion.div
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <button className="cursor-pointer bg-black rounded-md border border-black text-[#fafafa] px-6 py-2.5 flex items-center justify-center gap-2 font-semibold shadow-2xl btn duration-300 transition-all   ">
                        Book a Demo{" "}
                        <span className="font-bold duration-300 transition-all">
                          <TiArrowRightThick />
                        </span>
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <button className="cursor-pointer bg-white rounded-md text-secondary border border-gray-400 px-6 py-2.5 flex items-center justify-center gap-2 font-semibold btn duration-300 transition-all ">
                        Contact Us
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Problem & Solution */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{t('sections.problem_title')}</h2>
          <p className="mt-3 text-slate-700">{t('sections.problem_intro')}</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
            {(t('sections.problem_points', { returnObjects: true }) as string[]).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{t('sections.solution_title')}</h2>
          <p className="mt-4 text-slate-700">{t('sections.solution_text')}</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
            {(t('sections.solution_points', { returnObjects: true }) as string[]).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>


        {/* Footer */}

        <footer>
              
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
