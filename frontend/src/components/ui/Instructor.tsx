import Image from 'next/image';
import img from '@/public/assets/images/instructors/instructors-01.jpg';
import svg from '@/public/assets/icons/student-total.svg';
import svg2 from '@/public/assets/icons/play.svg';
import svg3 from '@/public/assets/icons/star.svg';

export default function InstructorCard() {
    return (
        <div className="w-full sm:w-80 bg-white shadow-lg p-4 sm:p-6 text-left">
            <div className="relative w-full h-48 sm:h-64 overflow-hidden">
                <div className="group w-full h-full overflow-hidden">
                    <Image
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-125"
                        src={img}
                        alt="Instructor"
                    />
                </div>
            </div>
            <div className="mt-4 text-left">
                <div className="flex justify-start sm:justify-around text-sm text-gray-500 mb-2">
                    <span className="inline-flex items-center space-x-2">
                        <Image src={svg} alt="Student Total Icon" width={16} height={16} />
                        <span>345 Students</span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                        <Image src={svg2} alt="Course Total Icon" width={16} height={16} />
                        <span>34 Courses</span>
                    </span>
                </div>
                <div>
                    <p className="font-sans text-base font-medium leading-7 mb-3">Sarah</p>
                </div>

                <p className="text-sm text-gray-600 font-normal">Professional Web Developer</p>

                <div className="flex items-center text-sm h-12">
                    <div className="text-black-300">4.9</div>
                    <Image className="ml-2" src={svg3} alt="star rating" width={12} height={12} />
                </div>
            </div>
        </div>
    );
}
