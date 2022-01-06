import { useState, useEffect } from "react";
import HeroSmall from "../ecommerce/HeroSmall";
import Newsletter from "../landingpage/Newsletter";

const Faq = ({ heroTitle, setHeroTitle, setHeaderLight, setBasketModalOn, animate }) => {

    useEffect(() => {
        const setStates = async () => {
            setHeroTitle("FAQ");
            setHeaderLight(true);
            setBasketModalOn(true);
        };
        setStates();
    });

    return (
        <div className={`${animate ? 'transition' : ''}`}>
            <HeroSmall heroTitle={heroTitle} />
            <section id="accordion">
                <div className="container">
                    <h2>Ofte stillede spørgsmål</h2>
                    <p className="mt-20">Vi er altid klar til at hjælpe, hvis du har spørgsmål. Find svar på de mest <br></br>stillede spørgsmål herunder</p>
                    <Accordion />
                </div>
            </section>
            <Newsletter />
        </div>
    );
}

function Accordion() {
    const accordionData = [
        {
            title: 'Hvad koster det at få leveret min ordre?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Hvor lang tid går der før jeg får leveret min ordre?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Kan jeg få indpakket varerne som gave?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Hvilke lande leverer Unika K til?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Kan jeg komme på venteliste, hvis et produkt er udsolgt?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        }
    ]

    return (
        <section className="accordion">
            {accordionData.map(({ title, content }) => (
                <AccordionItem title={title} content={content} />
            ))}
        </section>
    );
}

const AccordionItem = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion_item" onClick={() => setIsActive(!isActive)}>
            <div className="accordion_title">
                <div>{title}</div>
                <div className="plus">●</div>
            </div>
            {isActive && <div className="accordion_content">{content}</div>}
        </div>
    );
};

export default Faq;