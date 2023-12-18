import Link from 'next/link';
import CountUp from 'react-countup';
import ClientSlider from '../components/ClientSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import Head from 'next/head';
import { BiSolidFilePdf } from 'react-icons/bi';

const PersonalPortfolio = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'Founder of Alpha Design',
            thumbnail: '/assets/images/personal-portfolio/customer-avatar.svg',
            message:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ];
    return (
        <div className="overflow-hidden">
            <Head>
                <title>Personal Portfolio | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>DPA Act</h6>
                                <h4 className="!text-white">Legal Frame Work</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-t from-white/50 to-transparent py-14 pt-10 dark:bg-none md:py-20">
                <div className="container">
                    <h3 className="mb-10 text-4xl font-extrabold text-black dark:text-white">The Data Protection Act</h3>
                    <p className="text-justify text-lg font-semibold leading-[30px] text-black">
                        The Data Protection Authority (DPA), founded in 2023 under Law 005, is an independent nationwide authority dedicated to safeguarding
                        individual privacy. Aligned with international privacy principles, DPA focuses on responsible data management and the protection of
                        personal information of Somali people in the digital age.
                    </p>
                </div>
                <div className="container">
                    <div className="mt-20 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div>
                                <BiSolidFilePdf className="text-6xl" />
                            </div>
                            <div className="text-2xl font-semibold text-black">
                                <h3>The Data Protection Act</h3>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/public/Somalia Data Protection Act-2.pdf"
                                download="Somalia Data Protection Act-2.pdf"
                                className="btn py-5 px-9 text-white"
                            >
                                {' '}
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortfolio;
