import FAQ from "./components/FAQ";
import Features from "./components/Features";
import FlowBuilder from "./components/FlowBuilder";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <FlowBuilder />
      <FAQ />
    </main>
  )
}
