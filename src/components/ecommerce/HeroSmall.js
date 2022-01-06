export default function HeroSmall({ heroTitle }) {
    return (
        <section id="hero_small">
            <span className="overlay"></span>
            <div className="hero_content">
                <h1>{heroTitle}</h1>
            </div>
            {/* <video className='videoTag' loop muted>
                <source src={`../img/hero_landing.mp4`} type='video/mp4' />
            </video> */}
        </section>
    );
}