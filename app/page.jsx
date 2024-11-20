'use client'

import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Banner from "./Home/Banner";
import OurClints from "./Home/OurClints";
import OurServices from "./Home/OurServices";
import OurProjects from "./Home/OurProjects";
import ClintTestmonial from "./Home/ClintTestmonial";
import Certificate from "./Home/Certificate";
import FAQ from "./Home/FAQ";
import TechStack from "./Home/TechStack";



export default function Home() {
  

  

 

  return (
    <main>
      <div className="mb-10">
       <Banner></Banner>
       <OurClints></OurClints>
       <OurServices></OurServices>
       <OurProjects></OurProjects>
       <ClintTestmonial></ClintTestmonial>
       <Certificate></Certificate>
       <TechStack></TechStack>
       <FAQ></FAQ>

      


      </div>
    </main>
  );
}
