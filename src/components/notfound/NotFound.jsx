import Footer from "../footer/Footer";
import Header from "../header/Header";


export function NotFound() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>404</h1>
                            <p>Page not found</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}