import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import { IoMdStar } from 'react-icons/io';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import img from '@/public/assets/images/courses/courses-01.jpg';
import timeTable from '@/public/assets/icons/timetable.svg';
import hour from '@/public/assets/icons/hour.svg';
import { cn } from '@/utils/helpers';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function CourseCard() {
    return (
        <div className="w-[315.435px] mr-[25px]">
            <div className="group">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="group w-full h-full overflow-hidden rounded-md">
                        <Image
                            className="w-full h-full object-cover transition duration-1000 group-hover:scale-125"
                            src={img}
                            alt="Course image"
                        />
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="absolute top-[-220px] right-[10px] flex items-center justify-center 
    w-[35px] h-[35px] rounded-full bg-[rgba(19,24,54,0.3)] 
    shadow-[0_6px_15px_0_rgba(64,79,104,0.05)] text-white 
    opacity-0 invisible 
    transition-all duration-300 ease-in-out 
    group-hover:opacity-100 group-hover:visible group-hover:bg-[rgba(19,24,54,0.3)]  group-hover:text-secondary"
                    >
                        <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.55005 0.693359C7.99927 0.693359 7.48364 0.787109 7.00317 0.974609C6.51099 1.16211 6.07446 1.42578 5.6936 1.76562C5.31274 2.10547 4.99927 2.50391 4.75317 2.96094C4.50708 
                                    3.41797 4.34888 3.91016 4.27856 4.4375H3.7688C3.40552 4.4375 3.0686 4.44043 2.75806 4.44629C2.44751 4.45215 2.16919 4.47266 1.9231 4.50781C1.66528 4.54297 1.42505 4.60449 1.20239 
                                    4.69238C0.979736 4.78027 0.780518 4.92383 0.604736 5.12305C0.428955 5.32227 0.308838 5.53906 0.244385 5.77344C0.179932 6.00781 0.141846 6.25391 0.130127 6.51172C0.130127 6.74609 
                                    0.144775 7.01855 0.174072 7.3291C0.203369 7.63965 0.235596 7.98242 0.270752 8.35742L0.499268 10.4316C0.593018 11.2051 0.677979 11.8994 0.75415 12.5146C0.830322 13.1299 0.927002 
                                    13.6777 1.04419 14.1582C1.16138 14.6387 1.31665 15.0693 1.51001 15.4502C1.70337 15.8311 1.95825 16.168 2.27466 16.4609C2.60278 16.7539 2.96899 16.9736 3.37329 17.1201C3.77759 
                                    17.2666 4.22583 17.375 4.71802 17.4453C5.21021 17.5039 5.76978 17.5391 6.39673 17.5508C7.02368 17.5625 7.72974 17.5684 8.51489 17.5684H8.58521C9.37036 17.5684 10.0764 17.5625 
                                    10.7034 17.5508C11.3303 17.5391 11.8899 17.5039 12.3821 17.4453C12.8743 17.375 13.3225 17.2666 13.7268 17.1201C14.1311 16.9736 14.4973 16.7539 14.8254 16.4609C15.1418 16.168 
                                    15.3967 15.8311 15.5901 15.4502C15.7834 15.0693 15.9387 14.6387 16.0559 14.1582C16.1731 13.6777 16.2698 13.1299 16.3459 12.5146C16.4221 11.8994 16.5071 11.2051 16.6008 10.4316L16.8293 
                                    8.35742C16.8645 7.98242 16.8967 7.63965 16.926 7.3291C16.9553 7.01855 16.97 6.74609 16.97 6.51172C16.9583 6.25391 16.9202 6.00781 16.8557 5.77344C16.7913 5.53906 16.6711 5.32227 16.4954 
                                    5.12305C16.3196 4.92383 16.1204 4.78027 15.8977 4.69238C15.675 4.60449 15.4348 4.54297 15.177 4.50781C14.9309 4.47266 14.6526 4.45215 14.342 4.44629C14.0315 4.44043 13.6946 4.4375 13.3313 
                                    4.4375H12.8215C12.7512 3.91016 12.593 3.41797 12.3469 2.96094C12.1008 2.50391 11.7874 2.10547 11.4065 1.76562C11.0256 1.42578 10.5891 1.16211 10.0969 0.974609C9.61646 0.787109 9.10083 0.693359 
                                    8.55005 0.693359ZM8.55005 1.81836C9.33521 1.81836 10.0208 2.06738 10.6067 2.56543C11.1926 3.06348 11.5559 3.6875 11.6965 4.4375H5.40356C5.54419 3.6875 5.90747 3.06348 6.49341 2.56543C7.07935 
                                    2.06738 7.76489 1.81836 8.55005 1.81836ZM1.44849 5.87891C1.49536 5.82031 1.56567 5.77051 1.65942 5.72949C1.75317 5.68848 1.8938 5.65039 2.0813 5.61523C2.28052 5.5918 2.52075 5.57715 2.802 
                                    5.57129C3.08325 5.56543 3.4231 5.5625 3.82153 5.5625H13.2786C13.677 5.5625 14.0168 5.56543 14.2981 5.57129C14.5793 5.57715 14.8196 5.5918 15.0188 5.61523C15.2063 5.65039 15.3469 5.68848 
                                    15.4407 5.72949C15.5344 5.77051 15.6047 5.82031 15.6516 5.87891C15.6985 5.92578 15.7395 5.99902 15.7747 6.09863C15.8098 6.19824 15.8333 6.3418 15.845 6.5293C15.845 6.74023 15.8333 6.9834 
                                    15.8098 7.25879C15.7864 7.53418 15.7512 7.87109 15.7043 8.26953L15.4758 10.2734C15.3938 11.0703 15.3147 11.7617 15.2385 12.3477C15.1624 12.9336 15.0715 13.4434 14.9661 13.877C14.8606 14.3105 
                                    14.7375 14.665 14.5969 14.9404C14.4563 15.2158 14.2805 15.4414 14.0696 15.6172C13.8586 15.8047 13.6096 15.9541 13.3225 16.0654C13.0354 16.1768 12.6692 16.2617 12.2239 16.3203C11.7786 16.3789 
                                    11.2571 16.4141 10.6594 16.4258C10.0618 16.4375 9.35864 16.4434 8.55005 16.4434C7.74146 16.4434 7.03833 16.4375 6.44067 16.4258C5.84302 16.4141 5.32153 16.3789 4.87622 16.3203C4.43091 16.2617 
                                    4.0647 16.1768 3.77759 16.0654C3.49048 15.9541 3.24146 15.8047 3.03052 15.6172C2.81958 15.4414 2.6438 15.2158 2.50317 14.9404C2.36255 14.665 2.2395 14.3105 2.13403 13.877C2.02856 13.4434 1.93774 
                                    12.9336 1.86157 12.3477C1.7854 11.7617 1.7063 11.0703 1.62427 10.2734L1.39575 8.26953C1.34888 7.87109 1.31372 7.53418 1.29028 7.25879C1.26685 6.9834 1.25513 6.74023 1.25513 6.5293C1.26685 6.3418 
                                    1.29028 6.19824 1.32544 6.09863C1.3606 5.99902 1.40161 5.92578 1.44849 5.87891Z"
                            />
                        </svg>
                    </div>
                </div>
                <div className={cn(dmSans.className, 'pt-[10px] pb-[10px] border-b-[1px] border-gray-200')}>
                    <div className="flex mb-[6px] text-[#585d69] gap-[20px]">
                        <div className="flex items-center gap-[10px]">
                            <Image src={timeTable} alt=" timeTable" />
                            <p className="font-normal text-sm leading-7">11 Lessons</p>
                            <span className="after:bg-[#585d69] after:top-[-9px]">|</span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <Image src={hour} alt=" hour" />
                            <p className="font-normal text-sm leading-7 ">16 hours</p>
                        </div>
                    </div>
                    <h5
                        className="relative mb-[2px] overflow-hidden text-[16px] font-medium bg-no-repeat bg-gradient-to-r from-transparent to-current 
    [background-size:0_1px] [background-position-y:100%] transition-all duration-300 ease-in-out 
    hover:[background-size:100%_1px] "
                    >
                        Become a Certified Web Developer: HTML, CSS and JavaScript
                    </h5>
                    <div className="pt-[10px] mb-[2px] flex gap-2 items-center">
                        <div className="text-sm font-normal">4.9</div>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <span>(230)</span>
                    </div>
                    <div className="text-[#585d69] mb-[10px]">
                        By:
                        <Link href="#/" className="font-medium leading-7 hover:text-accent-900">
                            {' '}
                            Carolyn Welbon
                        </Link>
                    </div>
                </div>
                <div className="bottom pt-[10px]">
                    <div className="font-bold text-[16px] flex justify-between">
                        <span className="text-[#e27447]">$89.29</span>
                        <Link href="#/" className="flex font-light leading-7 hover:text-accent-900 gap-2">
                            Errol course
                            <GoArrowUpRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
