"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Me");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> Sobre mí</SectionHeading>
      <p className="mb-3">
        Después de obtener mi título en{" "}
        <span className="font-medium">Administración</span>, decidí cambiar mi rumbo profesional para seguir mi pasión por la programación. Me inscribí en <a  className="underline font-bold" href="https://www.digitalhouse.com/ar" target="_blank">DigitalHouse</a>  y adquirí mi primer certificado oficial {" "}
        <span className="font-medium">en desarrollo web </span>,{" "}
        <span className="italic"> donde pude descubrir la satisfacción que me genera</span> la resolución de problemas y disfrutar la sensación de superar los obstáculos que se presenten. Mi stack principal 
        es {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB <br /> 
        </span>
        Actualmente estoy perfeccionando mi stack capacitándome  en Typescript y Next.js  y Estoy en búsqueda de una posición full-time donde pueda aportar mis conocimientos y mejorar mis habilidades como programador en un equipo de trabajo
      </p>

      <p>
        <span className="italic">Cuando no estoy sumergido en código</span>, disfruto de aprender  producción musical y tocar guitarra eléctrica 🎸 para seguir mejorar mis habilidades.{" "}
        <span className="font-medium">Mi amor por el aprendizaje autodidacta se extiende a explorar nuevas tecnologías y conceptos en mi tiempo libre, lo que me mantiene siempre motivado a la hora de aprender</span>
      </p>
    </motion.section>
  );
}
