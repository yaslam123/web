import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import LogoSlider from '../components/LogoSlider';
import Testimonial from '../components/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';
import CountUp from 'react-countup';
import Modal from '../components/Modal';
import { useState, useRef } from 'react';
import AnimateHeight from 'react-animate-height';
import Head from 'next/head';
import Link from 'next/link';
import BlogSlider from '../components/BlogSlider';

const Consulting = () => {
    const dialog: any = useRef();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];

    const queries = [
        {
            id: 1,
            question: 'Are your service easy to use?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.',
        },
        {
            id: 2,
            question: 'Will i receive future updates?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
        },
        {
            id: 3,
            question: 'Is this services work in my country?',
            answer: ' mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
        },
        {
            id: 4,
            question: 'How much I will pay?',
            answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod',
        },
    ];
    const [accordians, setAccordians] = useState<any>(0);

    const css = `[data-height-collapsible] {
        transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }`;
    return (
        <div>
            <Head>
                <title>Consulting | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <section className="hotel-resort-banner relative">
                <div className="h-[750px] lg:h-[828px]">
                    <img src="/assets/images/consulting/home.jpeg" className="h-full w-full object-cover" alt="" />
                </div>
                <div
                    className="absolute inset-0 z-[1] opacity-70"
                    style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
                ></div>
                <div className="absolute inset-x-0 top-1/3 z-[1] -translate-y-1/2 text-white sm:top-1/2">
                    <div className="container">
                        <div className="max-w-[624px] text-center ltr:md:text-left rtl:md:text-right">
                            <h2 className="text-4xl font-black sm:text-5xl md:text-[70px] md:leading-[88px]">
                                <span className="">Your Right,</span> <br />
                                <span className="text-secondary">Your privacy,</span> <br />
                                <span className="text-primary">Our Responsibility</span>
                            </h2>
                            <p className="mt-4b text-lg font-semibold">
                                <span className="mt-4 text-2xl font-semibold">The Somalia Data Protection Authority (DPA),</span>
                                <br /> Founded in 2023 under Law 005, is an independent nationwide authority dedicated to safeguarding individual privacy.
                                Aligned with international privacy principles, DPA focuses on responsible data management and the protection of personal
                                information of Somali people in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-[1] bg-black/50">
                    <div className="container">
                        {/* <div className="book-form grid grid-cols-2 gap-4 py-8 sm:grid-cols-4 xl:grid-cols-5" data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Check in"
                                    className="h-14 w-full rounded-[20px] border-2 border-white bg-transparent py-[18px] px-4 font-semibold text-white outline-none placeholder:text-white"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="date"
                                    placeholder="Check out"
                                    className="h-14 w-full rounded-[20px] border-2 border-white bg-transparent py-[18px] px-4 font-semibold text-white outline-none placeholder:text-white"
                                />
                            </div>
                            <div className="relative">
                                <select className="h-14 w-full appearance-none rounded-[20px] border-2 border-white bg-transparent py-3 font-semibold text-white outline-none ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10">
                                    <option className="text-black">Adult</option>
                                    <option className="text-black">1</option>
                                    <option className="text-black">2</option>
                                    <option className="text-black">3</option>
                                    <option className="text-black">4</option>
                                </select>
                                <span className="absolute top-1/2 -translate-y-1/2 ltr:right-2.5 rtl:left-2.5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="relative">
                                <select className="h-14 w-full appearance-none rounded-[20px] border-2 border-white bg-transparent py-3 font-semibold text-white outline-none ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10">
                                    <option className="text-black">Children</option>
                                    <option className="text-black">1</option>
                                    <option className="text-black">2</option>
                                    <option className="text-black">3</option>
                                    <option className="text-black">4</option>
                                </select>
                                <span className="absolute top-1/2 -translate-y-1/2 ltr:right-2.5 rtl:left-2.5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className="col-span-2 mx-auto sm:mx-0 xl:col-span-1">
                                <button type="button" className="btn bg-secondary py-[18px] text-white">
                                    Check Availability
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="py-12 dark:bg-black lg:py-24">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="flex-none lg:max-w-[130px]">
                            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-1">
                                <a href="#">
                                    <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                                        <span>
                                            <img src="/assets/images/consulting/about-icon1.svg" className="mx-auto" alt="" />
                                        </span>
                                        <p className="text-b mt-2 font-semibold text-black dark:text-white sm:text-xl">Vision</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                                        <span>
                                            <img src="/assets/images/consulting/about-icon2.svg" className="mx-auto" alt="" />
                                        </span>
                                        <p className="mt-2 font-semibold text-black dark:text-white sm:text-xl">Missions</p>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                                        <span>
                                            <img src="/assets/images/consulting/about-icon3.svg" className="mx-auto" alt="" />
                                        </span>
                                        <p className="mt-2 font-semibold text-black dark:text-white sm:text-xl">Core Values</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-2">
                            <div>
                                <img src="/assets/images/consulting/web.png" className="mx-auto" alt="" />
                            </div>
                            <div className="space-y-4 text-center ltr:md:text-left rtl:md:text-right">
                                <h3 className="text-2xl font-black uppercase text-black dark:text-white sm:text-[38px] sm:leading-[50px]">
                                    Data <span className="text-secondary">Protection</span> Authority <span className="text-primary">enforces</span>
                                </h3>
                                <p className="text-md text-justify font-medium">
                                    data privacy by prioritizing transparency and integrity while actively engaging with stakeholders. It monitors and ensures
                                    compliance with data protection laws through regular audits and responds effectively to reported data breaches by conducting
                                    thorough investigations and taking enforcement actions{' '}
                                    <span className="text-secondary">
                                        <a href="">Learn More.....</a>
                                    </span>
                                </p>
                                {/* <button type="button" className="btn rounded-md text-white shadow-[10px_15px_30px_rgba(119,128,161,0.2)]">
                                    Learn More.....
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-black py-12 dark:bg-white/5 lg:py-24">
                <div className="absolute bottom-0 ltr:right-0 rtl:left-0">
                    <img src="/assets/images/consulting/bg-icon.svg" className="rtl:rotate-y-180" alt="" />
                </div>
                <div className="container relative z-[1]">
                    <div className="heading text-center text-white">
                        <h4 className="mb-2 !font-black uppercase !text-white">
                            What <span className="text-secondary">we do</span>
                        </h4>
                        <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="flip-left" data-aos-duration="1000">
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/consulting/regulation.jpeg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Regulation</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="pb-[60px] text-left text-lg font-semibold">
                                    The Data Protection Authority-Somalia regulates and oversees data protection, ensuring that organizations and entities
                                    adhere to established guidelines and laws governing the responsible handling of personal information.
                                </p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/consulting/services-icon1.svg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/consulting/awarness.jpeg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Awareness campaign</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="pb-[60px] text-left text-lg font-semibold">
                                    The Data Protection Authority (DPA) in Somalia enhances awareness through educational campaigns, training programs, and
                                    public outreach, aiming to inform and equip individuals and organizations with the knowledge needed to uphold data
                                    protection principles and foster a culture of privacy.
                                </p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/consulting/services-icon2.svg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden">
                                <img
                                    src="/assets/images/consulting/reinforcment.jpeg"
                                    className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    alt=""
                                />
                            </div>
                            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
                                <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">Enforcement and Compliance</h5>
                                <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
                                <p className="pb-[60px] text-left text-lg font-semibold">
                                    The DPA plays a crucial role in enforcing data protection regulations, holding organizations accountable for their data
                                    management practices. It strives to ensure compliance with both national laws and international privacy principles,
                                    promoting transparency and trust in the handling of sensitive information.
                                </p>
                                <span className="absolute bottom-0 opacity-20 ltr:right-0 rtl:left-0">
                                    <img src="/assets/images/consulting/services-icon3.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="bg-black !p-4 dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>

            <section className="bg-gradient-to-t from-white/60 to-transparent py-12 dark:bg-none lg:py-24">
                <div className="container">
                    <div className="flex flex-col items-center gap-5 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="lg:max-w-[790px]">
                            <div className="flex gap-3">
                                <div className="h-[30px] w-[5px] bg-secondary"></div>
                                <h5 className="text-2xl font-extrabold text-black dark:text-white">Latest Blogs</h5>
                            </div>
                            <div className="mt-5 flex flex-col gap-4 rounded-[10px] border border-[#BBBBBB]/50 p-4 dark:border-[#7780A1]/20 md:flex-row">
                                <div className="flex rounded-[10px]">
                                    <div>
                                        <div className="relative overflow-hidden rounded-[10px] md:max-w-[360px]">
                                            <img src="/assets/images/blog/blogs1.jpg" alt="" />
                                            <p className="absolute top-5 left-5 rounded bg-primary py-1 px-2.5 text-[12px] font-extrabold leading-4 text-white">
                                                LIFESTYLE
                                            </p>
                                        </div>
                                        <div className="mt-3 mb-4 flex gap-4">
                                            <div className="flex items-center gap-3">
                                                <img src="/assets/images/blog/shaun.png" className="w-9" alt="" />
                                                <p className="text-[13px] font-semibold">Shaun Park</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">20 May 2022</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="text-lg font-semibold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            16 Unheard Ways To Achieve Greater Walker
                                        </Link>
                                        <div className="mt-[14px] flex gap-6">
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="9" cy="4.5" r="3" stroke="#7780A1" strokeWidth="1.5"></circle>
                                                        <path
                                                            d="M11.25 15.4613C10.5681 15.6464 9.8052 15.75 9 15.75C6.10051 15.75 3.75 14.4069 3.75 12.75C3.75 11.0931 6.10051 9.75 9 9.75C11.8995 9.75 14.25 11.0931 14.25 12.75C14.25 13.009 14.1926 13.2603 14.0846 13.5"
                                                            stroke="#7780A1"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">Admin</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.7213 14.1831L7.18561 13.5941L6.7213 14.1831ZM9 4.12541L8.45963 4.64551C8.60102 4.79241 8.79612 4.87541 9 4.87541C9.20388 4.87541 9.39898 4.79241 9.54037 4.64551L9 4.12541ZM11.2787 14.1831L11.743 14.7721L11.2787 14.1831ZM5.36961 12.1708C5.04978 11.9076 4.57713 11.9535 4.31391 12.2733C4.05069 12.5932 4.09658 13.0658 4.4164 13.329L5.36961 12.1708ZM1.59199 10.1485C1.79074 10.5119 2.24647 10.6454 2.60988 10.4466C2.9733 10.2479 3.10677 9.79216 2.90801 9.42875L1.59199 10.1485ZM2.25 6.85276C2.25 5.30976 3.12161 4.02553 4.29622 3.48861C5.42355 2.97331 6.96414 3.09175 8.45963 4.64551L9.54037 3.60531C7.66098 1.6527 5.45157 1.31122 3.67262 2.12438C1.94095 2.91593 0.75 4.74856 0.75 6.85276H2.25ZM6.25699 14.7721C6.63944 15.0736 7.06194 15.4049 7.49302 15.6568C7.92386 15.9085 8.4346 16.1249 9 16.1249V14.6249C8.8154 14.6249 8.57614 14.5524 8.24981 14.3617C7.92371 14.1711 7.58186 13.9065 7.18561 13.5941L6.25699 14.7721ZM11.743 14.7721C12.8019 13.9374 14.1903 12.9557 15.2777 11.7313C16.3907 10.478 17.25 8.91043 17.25 6.85276H15.75C15.75 8.4423 15.102 9.67014 14.1561 10.7353C13.1845 11.8293 11.9623 12.6892 10.8144 13.5941L11.743 14.7721ZM17.25 6.85276C17.25 4.74856 16.059 2.91593 14.3274 2.12438C12.5484 1.31122 10.339 1.6527 8.45963 3.60531L9.54037 4.64551C11.0359 3.09175 12.5765 2.97331 13.7038 3.48861C14.8784 4.02553 15.75 5.30976 15.75 6.85276H17.25ZM10.8144 13.5941C10.4181 13.9065 10.0763 14.1711 9.75019 14.3617C9.42386 14.5524 9.1846 14.6249 9 14.6249V16.1249C9.5654 16.1249 10.0761 15.9085 10.507 15.6568C10.9381 15.4049 11.3606 15.0736 11.743 14.7721L10.8144 13.5941ZM7.18561 13.5941C6.58203 13.1183 5.98392 12.6764 5.36961 12.1708L4.4164 13.329C5.04031 13.8425 5.70661 14.3382 6.25699 14.7721L7.18561 13.5941ZM2.90801 9.42875C2.50096 8.68449 2.25 7.84347 2.25 6.85276H0.75C0.75 8.11484 1.0741 9.20162 1.59199 10.1485L2.90801 9.42875Z"
                                                            fill="#7780A1"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">350</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Link href="#">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_1110_13575)">
                                                            <path
                                                                d="M9.81499 16.0408L10.4604 16.4228L10.4604 16.4228L9.81499 16.0408ZM10.2216 15.3539L9.57615 14.9719L10.2216 15.3539ZM7.7784 15.3539L7.13299 15.7359H7.13299L7.7784 15.3539ZM8.18498 16.0408L8.83039 15.6587L8.18498 16.0408ZM0.75 7.875C0.75 8.28921 1.08579 8.625 1.5 8.625C1.91421 8.625 2.25 8.28921 2.25 7.875H0.75ZM2.47836 11.6481C2.31985 11.2654 1.88112 11.0836 1.49844 11.2422C1.11576 11.4007 0.934029 11.8394 1.09254 12.2221L2.47836 11.6481ZM5.84218 14.2436L5.82926 14.9935H5.82926L5.84218 14.2436ZM3.81494 13.9645L3.52792 14.6575H3.52793L3.81494 13.9645ZM16.2145 11.9351L16.9075 12.2221L16.2145 11.9351ZM12.1578 14.2436L12.1449 13.4937L12.1578 14.2436ZM14.1851 13.9645L14.4721 14.6575H14.4721L14.1851 13.9645ZM14.7094 2.0526L14.3175 2.69208L14.7094 2.0526ZM15.9474 3.29063L16.5869 2.89876V2.89876L15.9474 3.29063ZM3.29063 2.0526L2.89876 1.41312V1.41312L3.29063 2.0526ZM2.0526 3.29063L1.41312 2.89876H1.41312L2.0526 3.29063ZM7.05209 14.4074L7.42917 13.7591L7.42916 13.7591L7.05209 14.4074ZM10.4604 16.4228L10.867 15.7359L9.57615 14.9719L9.16958 15.6587L10.4604 16.4228ZM7.13299 15.7359L7.53956 16.4228L8.83039 15.6587L8.42382 14.9719L7.13299 15.7359ZM9.16958 15.6587C9.13625 15.7151 9.0781 15.7499 8.99998 15.7499C8.92187 15.7499 8.86372 15.7151 8.83039 15.6587L7.53956 16.4228C8.19235 17.5257 9.80762 17.5257 10.4604 16.4228L9.16958 15.6587ZM7.875 2.25H10.125V0.75H7.875V2.25ZM15.75 7.875V8.625H17.25V7.875H15.75ZM5.85511 13.4937C4.91351 13.4775 4.45251 13.4168 4.10195 13.2716L3.52793 14.6575C4.16782 14.9225 4.88782 14.9773 5.82926 14.9935L5.85511 13.4937ZM1.09254 12.2221C1.54926 13.3247 2.4253 14.2007 3.52792 14.6575L4.10195 13.2716C3.36687 12.9672 2.78284 12.3831 2.47836 11.6481L1.09254 12.2221ZM15.75 8.625C15.75 9.5089 15.7496 10.1343 15.7161 10.6258C15.683 11.1106 15.6202 11.4101 15.5216 11.6481L16.9075 12.2221C17.0943 11.7709 17.1743 11.289 17.2126 10.7279C17.2504 10.1735 17.25 9.48838 17.25 8.625H15.75ZM12.1707 14.9935C13.1122 14.9773 13.8322 14.9225 14.4721 14.6575L13.8981 13.2716C13.5475 13.4168 13.0865 13.4775 12.1449 13.4937L12.1707 14.9935ZM15.5216 11.648C15.2172 12.3831 14.6331 12.9672 13.8981 13.2716L14.4721 14.6575C15.5747 14.2007 16.4507 13.3247 16.9075 12.2221L15.5216 11.648ZM10.125 2.25C11.3671 2.25 12.2459 2.25079 12.9287 2.31571C13.6003 2.37956 14.0043 2.50013 14.3175 2.69208L15.1012 1.41312C14.5127 1.05247 13.8521 0.896737 13.0707 0.822442C12.3004 0.749209 11.338 0.75 10.125 0.75V2.25ZM17.25 7.875C17.25 6.66199 17.2508 5.69956 17.1776 4.92933C17.1033 4.14795 16.9475 3.48728 16.5869 2.89876L15.3079 3.6825C15.4999 3.99574 15.6204 4.39972 15.6843 5.07131C15.7492 5.75406 15.75 6.63294 15.75 7.875H17.25ZM14.3175 2.69208C14.7212 2.93945 15.0606 3.27884 15.3079 3.6825L16.5869 2.89876C16.2158 2.29326 15.7067 1.78417 15.1012 1.41312L14.3175 2.69208ZM7.875 0.75C6.66199 0.75 5.69956 0.749209 4.92933 0.822442C4.14795 0.896737 3.48728 1.05247 2.89876 1.41312L3.6825 2.69208C3.99574 2.50013 4.39972 2.37956 5.07131 2.31571C5.75406 2.25079 6.63294 2.25 7.875 2.25V0.75ZM2.25 7.875C2.25 6.63294 2.25079 5.75406 2.31571 5.07131C2.37956 4.39972 2.50013 3.99574 2.69208 3.6825L1.41312 2.89876C1.05247 3.48728 0.896737 4.14795 0.822442 4.92933C0.749209 5.69956 0.75 6.66199 0.75 7.875H2.25ZM2.89876 1.41312C2.29326 1.78417 1.78417 2.29326 1.41312 2.89876L2.69208 3.6825C2.93945 3.27884 3.27884 2.93945 3.6825 2.69208L2.89876 1.41312ZM8.42382 14.9719C8.27335 14.7176 8.13454 14.4816 7.99807 14.2943C7.85237 14.0944 7.67724 13.9033 7.42917 13.7591L6.67502 15.0557C6.68022 15.0587 6.71056 15.0745 6.78586 15.1778C6.87039 15.2938 6.9681 15.4573 7.13299 15.7359L8.42382 14.9719ZM5.82926 14.9935C6.16207 14.9992 6.36046 15.0034 6.50878 15.0198C6.64318 15.0347 6.6723 15.0541 6.67502 15.0557L7.42916 13.7591C7.17862 13.6133 6.92166 13.5564 6.67386 13.5289C6.43998 13.503 6.16006 13.499 5.8551 13.4937L5.82926 14.9935ZM10.867 15.7359C11.0319 15.4573 11.1296 15.2938 11.2141 15.1778C11.2894 15.0745 11.3198 15.0587 11.3249 15.0557L10.5708 13.7591C10.3227 13.9033 10.1476 14.0944 10.0019 14.2943C9.86543 14.4816 9.72662 14.7176 9.57615 14.9719L10.867 15.7359ZM12.1449 13.4937C11.8399 13.499 11.56 13.503 11.3261 13.5289C11.0783 13.5564 10.8214 13.6133 10.5708 13.7591L11.3249 15.0557C11.3277 15.0541 11.3568 15.0347 11.4912 15.0198C11.6395 15.0034 11.8379 14.9992 12.1707 14.9935L12.1449 13.4937Z"
                                                                fill="#7780A1"
                                                            ></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1110_13575">
                                                                <rect width="18" height="18" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                                <p className="text-sm font-semibold">30</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm font-medium">
                                            Lorem ipsum dolor amet consectetur adipisicing elit eiusm tempor incididunt...
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="group flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/blog/blogs2.jpg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="#"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                5 Easy Ways You Can Turn Future Into Success
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">20 May 2022</p>
                                            </div>
                                            <p className="mt-2.5 text-sm font-medium">Lorem ipsum dolor sit amet consectetur elit sed do.</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-gray opacity-50"></div>
                                    <div className="flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/blog/blogs3.jpg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="#"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                Etiam Vel Neqe
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">20 May 2022</p>
                                            </div>
                                            <p className="mt-2.5 text-sm font-medium">Lorem ipsum dolor sit amet consectetur elit sed do.</p>
                                        </div>
                                    </div>
                                    <div className="border-b border-dashed border-gray opacity-50"></div>
                                    <div className="flex gap-[14px]">
                                        <div className="flex-none">
                                            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[10px]">
                                                <img src="/assets/images/blog/blogs4.jpg" className="h-full w-full object-cover" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Link
                                                href="#"
                                                className="text-lf font-bold text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                            >
                                                Etiam Vel Neqe
                                            </Link>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span>
                                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 5.83325V8.49992L9.66667 10.1666"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                        <path
                                                            d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                            stroke="#969AA9"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <p className="text-[13px] font-semibold">20 May 2022</p>
                                            </div>
                                            <p className="mt-2.5 text-sm font-medium">Lorem ipsum dolor sit amet consectetur elit sed do.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-4">
                                <div className="h-[30px] w-[5px] bg-primary"></div>
                                <h5 className="text-2xl font-extrabold text-black dark:text-white">Popular Posts</h5>
                            </div>
                            <div className="mt-5 space-y-5 rounded-[10px] border border-[#BBBBBB]/50 p-4 dark:border-[#7780A1]/20">
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/blog/popular1.jpg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Your Light Is About To Stop Being Relevant
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">20 May 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/blog/popular2.jpg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Your Light Is About To Stop Being Relevant
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">24 May 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/blog/popular3.jpg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            3 Easy Ways To Make Your iPhone Faster
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">20 May 2022</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-dashed border-gray opacity-50"></div>
                                <div className="flex gap-3">
                                    <div className="flex-none">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/blog/popular4.jpg" className="h-full w-full object-cover" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            href="#"
                                            className="text-[15px] font-bold leading-5 text-black duration-200 hover:text-secondary dark:text-white dark:hover:text-secondary"
                                        >
                                            Secrets Your Parents Never Told You About Bulb
                                        </Link>
                                        <div className="mt-2.5 flex items-center gap-2">
                                            <span>
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 5.83325V8.49992L9.66667 10.1666"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M4.66668 2.72513C5.64725 2.1579 6.78572 1.83325 8.00001 1.83325C11.6819 1.83325 14.6667 4.81802 14.6667 8.49992C14.6667 12.1818 11.6819 15.1666 8.00001 15.1666C4.31811 15.1666 1.33334 12.1818 1.33334 8.49992C1.33334 7.28563 1.65799 6.14716 2.22522 5.16658"
                                                        stroke="#969AA9"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-[13px] font-semibold">20 May 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{css}</style>
        </div>
    );
};

export default Consulting;
