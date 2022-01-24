import Banner2 from "../../Components/Home/Banner2";
import Banner3 from "../../Components/Home/Banner3";
import Banner4 from "../../Components/Home/Banner4";
import Banner5 from "../../Components/Home/Banner5";
import Banner6 from "../../Components/Home/Banner6";
import Banner7 from "../../Components/Home/Banner7";
import Contract from "../../Components/Home/Contract";
import HomeBanner from "../../Components/Home/HomeBanner"
import Services from "../../Components/Home/Services";
import Story from "../../Components/Home/Story";
import Teams from "../../Components/Home/Teams";
import Navigation from "../../Components/Navbar";



const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Banner2></Banner2>
            <Banner3></Banner3>
            <Banner4></Banner4>
            <Services></Services>
            <Banner5></Banner5>
            <Banner6></Banner6>
            <Banner7></Banner7>
            <Teams></Teams>
            <Story></Story>
            <Contract></Contract>
        </div>
    )


}
export default Home;