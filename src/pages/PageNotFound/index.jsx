
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            
            <div class="border">
                <div class="content-box">
                    <div class="header">
                        <div class="dash">
                        <div class="minus"></div>
                    </div>
                    <div class="title">404 Not Found</div>
                </div>
                <div class="content">
                    <div class="icon">i</div>
                    <p>
                        <br/>A wild 404-PAGE appeared!
                    </p>
                    <div class="button">
                        <div class="chosen"><Link to={'/'}>Voltar</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;