import AllProduct from "../components/AllProduct"
import CategorySection from "../components/CategorySection"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import TopProduct from "../components/TopProduct"

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <CategorySection />
      <TopProduct />
      <AllProduct />
    </div>
  )
}

export default Home
