'use client'

import { Button } from "@material-tailwind/react";
import { useState } from "react";
import Banner from "./Home/Banner";
import OurClints from "./Home/OurClints";
import OurServices from "./Home/OurServices";
import OurProjects from "./Home/OurProjects";
import ClintTestmonial from "./Home/ClintTestmonial";



export default function Home() {
  

  

 

  return (
    <main>
      <div className="mb-10">
       <Banner></Banner>
       <OurClints></OurClints>
       <OurServices></OurServices>
       <OurProjects></OurProjects>
       <ClintTestmonial></ClintTestmonial>

      


      </div>
    </main>
  );
}
