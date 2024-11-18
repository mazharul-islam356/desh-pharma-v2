import Image from "next/image";
import certificate01 from '../../public/assets/images/certificate.jpg'
import certificate02 from '../../public/assets/images/certificate02.jpg'


const Certificate = () => {
    return (
        <div className="w-11/12 mx-auto mt-28">
            <h1 className="font-semibold text-4xl text-center">Our Achivemnt</h1>

            <div className="flex justify-around items-center mt-16">
                <Image className="rounded-lg shadow-md" alt="certificate_01" src={certificate01} width={500}></Image>
                <Image className="rounded-lg shadow-md" alt="certificate_01" src={certificate02} width={500}></Image>
            </div>
        </div>
    );
};

export default Certificate;