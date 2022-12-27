import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "@constants/data";


export default function Home() {
  return (
    <ContainerBlock
      title="Jean-François LeBlanc"
      description="Portfolio"
    >
      
      <Hero />
      
    </ContainerBlock>
  );
}
