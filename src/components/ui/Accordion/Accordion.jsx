import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./accordion.css";
import { Icon } from '@iconify/react';

const Accordions = ({ data }) => {
    return (
        <Accordion preExpanded={[0]}>
            {
                data.map((item, index) => (
                    <AccordionItem uuid={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {`${index + 1}. ${item.title}`}
                            <Icon icon="ph:plus-bold" className='plus_icon' />
                            <Icon icon="ic:baseline-minus" className='minus_icon' />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                {item.content}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))
            }
        </Accordion>
    );
}

export default Accordions;
