/* Importing NavLink for custom buttons */
import { NavLink } from "react-router-dom"

export default function Home() {

    return (
        <main>
            <div className="container">
                <section className="herobanner">
                    <h1>The future is <span className="mottospecial">here.</span>
                        <br />
                        The future is <span className="mottospecial">Moderno.</span></h1>
                    <p>We don’t just sell products. We sell what comes after.</p>
                    {/* Using NavLink to let users navigate without page reloads */}
                    <NavLink to="/products">
                        <button className="goto">Explore our products</button>
                    </NavLink>
                    <NavLink to="/aboutus">
                        <button className="goto">About Us</button>
                    </NavLink>
                </section>
                <section className="reviews">
                    <h2>What people say</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                            <div className="gridcard">
                                <p>"Arrived in 2 days, quality is exactly as described. Will buy again."</p>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="gridavatar d-flex align-items-center justify-content-center flex-shrink-0">LM</div>
                                    <div>
                                        <span className="gridname">Luigi M.</span>
                                        <span className="gridrole">Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="gridcard">
                                <p>"Exactly what I needed. Fast delivery and well packaged."</p>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="gridavatar d-flex align-items-center justify-content-center flex-shrink-0">CT</div>
                                    <div>
                                        <span className="gridname">Camilla T.</span>
                                        <span className="gridrole">Italy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}