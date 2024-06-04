import Slides from "../../components/Banner/Slides";
import BlogSection from "./BlogSection/BlogSection";
import CategoryCard from "./CategoryCardSection/CategoryCard";
import ProfessionalSection from "./ProfessionalSection/ProfessionalSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Slides></Slides>
            <CategoryCard></CategoryCard>
            <ProfessionalSection></ProfessionalSection>
            <BlogSection></BlogSection>
        </div>
    );
};

export default Home;