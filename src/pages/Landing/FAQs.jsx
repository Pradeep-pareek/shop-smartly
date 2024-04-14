import Accordions from "../../components/ui/Accordion/Accordion"

const FAQs = () => {
    const data = [
        {
            title: "What is Shopsmartly",
            content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, illum amet, nesciunt iusto praesentium omnis modi dolore exercitationem maxime, nulla ducimus eligendi sit ullam ipsa accusamus perferendis cupiditate aliquam?"
        },
        {
            title: "Why should Sale Online",
            content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, illum amet, nesciunt iusto praesentium omnis modi dolore exercitationem maxime, nulla ducimus eligendi sit ullam ipsa accusamus perferendis cupiditate aliquam?"
        },
        {
            title: "Can I customize Your Product Details",
            content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, illum amet, nesciunt iusto praesentium omnis modi dolore exercitationem maxime, nulla ducimus eligendi sit ullam ipsa accusamus perferendis cupiditate aliquam?"
        },
        {
            title: "What types of Sale Product",
            content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, illum amet, nesciunt iusto praesentium omnis modi dolore exercitationem maxime, nulla ducimus eligendi sit ullam ipsa accusamus perferendis cupiditate aliquam?"
        }
    ];
    return (
        <div className='bg-[#E1F1FF] py-14'>
            <div className="faqs bg-[#6DC3F4]  w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12">
                <div className='container mx-auto'>
                    <div>
                        <h1>FAQ’s</h1>
                        <p className="mb-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt porro ipsum consectetur est harum nostrum qui</p>
                        <Accordions data={data} />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs
