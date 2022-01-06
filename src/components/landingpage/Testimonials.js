export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container">
                <div className="content">
                    <div>
                        <h3 className="mb-10">Testimonials</h3>
                        <h2>Vores kunder siger</h2>
                    </div>
                    <div>
                        <img src={`../img/trustpilot_icon.svg`} alt="" />
                    </div>
                </div>
                <div className="testimonial_slider mt-30">
                    {/* <TestimonialSlider /> */}
                </div>
            </div>
        </section>
    );
}
