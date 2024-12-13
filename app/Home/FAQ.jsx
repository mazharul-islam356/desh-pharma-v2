import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
const FAQ = () => {

    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="my-20 w-9/12 mx-auto">
            <h1 className="text-4xl font-semibold text-center">FAQ</h1>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="text-black mt-10 font-poppins" onClick={() => handleOpen(1)}>How do I transfer my prescription to Desh Pharam?</AccordionHeader>
        <AccordionBody className='font-poppins text-gray-900 font-normal'>
        Transferring your prescription is easy. Simply call our pharmacy or visit us in person with your current prescription information. Our staff will handle the transfer process for you, contacting your previous pharmacy if necessary.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="text-black font-poppins" onClick={() => handleOpen(2)}>
        Do you offer home delivery for prescriptions?
        </AccordionHeader>
        <AccordionBody className='font-poppins text-gray-900 font-normal'>
        Yes, we offer home delivery for prescriptions. You can request delivery when you refill your prescription online, through our mobile app, or by calling the pharmacy. We typically deliver within a 10-mile radius of our store.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="text-black font-poppins" onClick={() => handleOpen(3)}>
        What are your pharmacy hours?
        </AccordionHeader>
        <AccordionBody className='font-poppins text-gray-900 font-normal'>
        Our pharmacy is open 24/7 to serve you at any time. This includes holidays and weekends. Our pharmacists are always available for emergency consultations and prescription fills.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="text-gray-900 font-poppins" onClick={() => handleOpen(4)}>
       Can I get a consultation with a pharmacist?
        </AccordionHeader>
        <AccordionBody className='font-poppins text-gray-900 font-normal'>
        Absolutely! Our pharmacists are available for consultations at any time. You can discuss your medications, potential side effects, drug interactions, or any other health concerns. No appointment is necessary for a consultation.
        </AccordionBody>
      </Accordion>
        </div>
    );
};

export default FAQ;