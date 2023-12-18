import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: 'What is the role of the DPA?',
            answer: 'The DPA plays a crucial role in overseeing and regulating data protection within Somalia. It ensures that organizations adhere to robust data protection standards, conducts audits, and takes enforcement actions in cases of non-compliance.',
        },
        {
            id: 2,
            question: 'How can the DPA help individuals protect their privacy?',
            answer: 'The DPA provides guidance on privacy rights, handles complaints, and conducts public awareness initiatives. Individuals can reach out to us for support in understanding and exercising their privacy rights.',
        },
        {
            id: 3,
            question: 'What steps should organizations take to ensure compliance with data protection regulations?',
            answer: 'FOrganizations should conduct regular assessments, implement comprehensive data protection measures, and stay informed about evolving privacy standards. The DPA offers guidance and resources to assist entities in achieving and maintaining compliance.',
        },
        {
            id: 4,
            question: 'What should I do if I suspect a data breach has occurred involving my personal information?',
            answer: 'If you suspect a data breach, contact the DPA immediately. We will guide you on the necessary steps to take, and we have mechanisms in place to investigate and address potential breaches promptly.',
        },
        {
            id: 5,
            question: 'Can the DPA impose fines for data protection violations?',
            answer: 'Yes, the DPA has the authority to impose fines and other enforcement measures in cases of data protection violations. These measures are designed to ensure compliance and deter future non-compliance.',
        },
        {
            id: 6,
            question: 'How does the DPA handle complaints from individuals regarding privacy concerns?',
            answer: 'Individuals can submit privacy-related complaints to the DPA. We conduct thorough investigations and take appropriate actions to address and resolve complaints in accordance with privacy regulations.',
        },
        {
            id: 7,
            question: 'Is the DPA involved in policy advocacy related to data protection?',
            answer: 'Yes, the DPA actively engages in policy advocacy, working with government bodies, policymakers, and international organizations to shape and enhance privacy-related legislation that reflects contemporary challenges.',
        },
        {
            id: 8,
            question: 'Is the DPA involved in policy advocacy related to data protection?',
            answer: 'Yes, the DPA actively engages in policy advocacy, working with government bodies, policymakers, and international organizations to shape and enhance privacy-related legislation that reflects contemporary challenges.',
        },
        {
            id: 9,
            question: 'What initiatives does the DPA have in place to raise public awareness about data protection?',
            answer: 'The DPA conducts extensive public awareness campaigns, workshops, and collaborates withstakeholders to ensure individuals are well-informed about their privacy rights and the importance of responsible data handling.',
        },
        {
            id: 10,
            question: 'How can I stay updated on the latest developments and guidelines from the DPA?',
            answer: 'Stay informed by regularly visiting our official website, subscribing to newsletters, and following our official social media channels. We provide updates, guidelines, and relevant information to keep the public and organizations informed about data protection matters.',
        },
    ],
}) => {
    const [active, setActive] = useState<any>(0);
    return (
        <section className="py-14 lg:py-[100px]">
            <div className="container">
                <div className="heading text-center">
                    <h6 className={`${showTitle ? '' : 'hidden'} ${type.toLowerCase() === 'modern-saas' ? '!text-secondary' : ''}`}>FAQs</h6>
                    <h4>
                        Frequently Asked <span className={type.toLowerCase() === 'restaurent' ? '!text-secondary' : ''}>Questions</span>
                    </h4>
                    <p className="mt-5 text-lg font-bold">Have questions? We’re help you.</p>
                </div>
                <div className="mx-auto lg:w-[730px]">
                    {queries.map((faq: any, i: number) => {
                        return (
                            <div key={faq.id} className="mt-6 border-0 border-b-2 border-gray/20 bg-transparent">
                                <button
                                    type="button"
                                    className="relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div>{faq.question}</div>
                                    <div
                                        className={`grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition ${
                                            active === i ? '!border-black !text-black dark:!border-white dark:!text-white' : ''
                                        }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                className={active === i ? 'hidden' : ''}
                                                d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                                    <div className="lg:w-4/5">
                                        <p className="px-0 pb-5 pt-0 text-sm font-bold leading-[18px] text-gray">{faq.answer}</p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
