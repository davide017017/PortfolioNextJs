import { FC, memo } from 'react';
import classNames from 'classnames';
import { contactData } from '../../data/data';
import { ContactItem } from '../../data/types';
import Section from '../Layout/Section';

const Contact: FC = memo(() => {
    const { headerText, items } = contactData;

    return (
        <Section className="bg-off-white-900 " sectionId="contact">
        <div className="flex flex-col gap-y-6 text-center">
            {/* Header */}
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-dark-olive-700">{headerText}</h2>
            </div>
            {/* Description and contact information */}
            <div className="order-1 flex flex-col gap-y-4 md:order-2">
                <dl className="flex flex-col space-y-4 text-base text-dark-olive-700 sm:space-y-2 lg:flex-row">
                {items.map(({ text, href, Icon, srLabel }: ContactItem) => (
                    <div key={srLabel} className="flex m-auto">
                    <dt className="sr-only ">{srLabel}</dt>
                    <dd className="flex items-center ">
                        <a
                        className={classNames(
                            'text-xl -m-2 flex rounded-md p-2 text-dark-olive-700 hover:text-off-white-300 focus:outline-none focus:ring-2 focus:ring-golden-brown-50',
                            { 'hover:text-white': href },
                        )}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Icon aria-hidden="true" className="h-8 w-8 mr-3" />
                        <span>{text}</span>
                        </a>
                    </dd>
                    </div>
                ))}
                </dl>
            </div>
            </div>
        </Section>
    );
});

Contact.displayName = 'Contact';
export default Contact;