import './Main.css'

export default function Header() {
    return (
        <>
            <main>
                <div className="main-content">
                    <div className="images-container">
                        <img src="./images/fastest_sport_car.jpeg" alt="Fastest car in the World" width="650px" />
                        <img src="./images/most_expencive_car.jpg" alt="Most expensive car in the World" width="650px" />
                    </div>
                    <div className="articles-container">
                        <div className="article">
                            <article>
                                <h2>Fastest car in the World</h2>
                                <p>Koenigsegg claims that their new Jesko Absolut can reach 531 km/h, but under certain conditions. And
                                    these
                                    conditions include removing passenger seats, installing special tires, racing fuel, and so on...</p>
                            </article>
                            <a className="btn read-more-btn" href="#">Read more...</a>
                        </div>
                        <div className="article">
                            <article>
                                <h2>Most expensive car in the World</h2>
                                <p>The Rolls-Royce Boat Tail is by far the most expensive new car of all time - $26.2 million. This
                                    18.7-foot-long convertible with its vintage and modern design is powered by a twin-turbo V12 and 8-speed
                                    automatic transmission.</p>
                            </article>
                            <a className="btn read-more-btn" href="#">Read more...</a>
                        </div>
                    </div>
                </div>
                <div className="middle-section">
                    <div className="singin-container">
                        <p>Sign in or register now to join our community!</p>
                        <a className="btn sign-in-btn" href="#">Sign In/Register</a>
                    </div>
                </div>
                <div className="gallery-section">
                    <h2>WEIRDEST CARS EVER MADE</h2>
                    <a className="btn read-article-btn" href="#">Read the article...</a>
                    <div className="images-container">
                        <img src="./images/weird_car_one.jpg" alt="A small weird car in an elevator" width="250px" />
                        <img src="./images/weird_car_two.jpg" alt="A small red weird car on a sidewalk" width="250px" />
                        <img src="./images/weird_car_three.jpg" alt="A small lightblue weird car near a forest" width="250px" />
                    </div>
                </div>
            </main>
        </>
    )
}