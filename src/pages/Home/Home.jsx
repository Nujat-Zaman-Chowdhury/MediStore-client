import Slides from "../../components/Banner/Slides";
import BlogSection from "./BlogSection/BlogSection";
import CategoryCard from "./CategoryCardSection/CategoryCard";
import DiscountProducts from "./DiscountProducts/DiscountProducts";
import ProfessionalSection from "./ProfessionalSection/ProfessionalSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Slides></Slides>
            <div className=" p-3 lg:p-0">
            <CategoryCard></CategoryCard>
            <DiscountProducts></DiscountProducts>
            <ProfessionalSection></ProfessionalSection>
            <BlogSection></BlogSection>
            </div>
        </div>
    );
};

export default Home;