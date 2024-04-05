import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <CategoryList></CategoryList>
                <FeaturedJobs></FeaturedJobs>
                <h3>this is home</h3>
        </div>
    );
};

export default Home;