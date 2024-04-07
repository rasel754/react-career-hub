import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>career-hub | Home</title>
            </Helmet>
                <Banner></Banner>
                <CategoryList></CategoryList>
                <FeaturedJobs></FeaturedJobs>
                <h3>this is home</h3>
        </div>
    );
};

export default Home;