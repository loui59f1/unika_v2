export default function Newsletter() {

    return (
        <section id="newsletter" className="relative">
            <div className="container">
                <div className="content">
                    <h2>Join the club</h2>
                    <p className="mt-20">Som modtager af vores nyhedsbrev, er du altid up to date på nye trends og tendenser indenfor keramik og indretning.</p>
                </div>
                <div className="form_container mt-30">
                    <NewsletterForm />
                </div>
            </div>
        </section>
    );
}

function NewsletterForm() {
    return (
        <form className="newsletter_form">
            <input id="newsletter" type="email" placeholder="Enter your e-mail adress" />
            <label htmlFor="newsletter" />
            <span className="focus-border"></span>
            <button type="submit">Join now</button>
        </form>
    )
}