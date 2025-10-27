import CategorySection from "../components/CategorySection"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import TopProduct from "../components/TopProduct"
import LatestProduct from "../components/LatestProduct"

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoSection />
      <CategorySection />
      <TopProduct />
      <LatestProduct />
    </div>
  )
}

export default Home
