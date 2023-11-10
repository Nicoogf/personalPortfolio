"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks"; 
import { BiLogoInstagram } from "react-icons/bi"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { CiMail } from "react-icons/Ci"


export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contacto</SectionHeading>

      <div className="text-gray-700 -mt-6 dark:text-white/80 mb-14">
       Para contactarse puede utilizar cualquiera de los siguientes enlaces{" "} 
       <br/>
       <br/>

       <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

          <a className="text-center flex items-center justify-center gap-2 w-[60%] bg-gray-200 borderBlack rounded-xl px-3 py-2 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200 dark:hover:bg-gray-600" href="mailto:nicolasgfalabella@gmail.com" target="_blank">
            <CiMail  className="text-2xl"/> Mail  
          </a>{" "}

          <a className="text-center flex items-center justify-center gap-2 w-[60%] bg-gray-200  borderBlack rounded-xl  px-3 py-2 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200 dark:hover:bg-gray-600" href="https://api.whatsapp.com/send?phone=5492324584106"  target="_blank">
          <AiOutlineWhatsApp  className="text-2xl" /> Whatsapp
          </a>{" "}

          <a className="text-center flex items-center justify-center gap-2 w-[60%] bg-gray-200  borderBlack rounded-xl  px-3 py-2 dark:bg-white/10 dark:text-white/80 hover:bg-gray-950 hover:text-gray-200  dark:hover:bg-gray-600"  href="https://www.instagram.com/nfalabella_/ "  target="_blank">
          <BiLogoInstagram className="text-2xl" /> Instagram
          </a>{" "}
  
       </div>
       

       
      </div>
    </motion.section>
  );
}
