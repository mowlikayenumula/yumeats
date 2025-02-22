import CategoriesComponent from "./components/CategoriesComponent";
import FeaturedComponent from "./components/FeaturedComponent";
import FooterComponent from "./components/FooterComponent";
import MealsComponent from "./components/MealsComponent";
import NewsLetterComponent from "./components/NewsLetterComponent";
import QuickDeliveryComponent from "./components/QuickDeliveryComponent";
import TopNavComponent from "./components/TopNavComponent";
import TopPicksComponent from "./components/TopPicksComponent";

function App() {
  return (
    <div>
      <TopNavComponent/>
      <FeaturedComponent/>
      <QuickDeliveryComponent/>
      <TopPicksComponent/>
      <MealsComponent/>
      <CategoriesComponent/>
      <NewsLetterComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
