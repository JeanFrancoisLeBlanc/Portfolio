import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import AboutMe from "../components/AboutMe";
import getLatestRepos from "@lib/getLatestRepos";
import LatestCode from "../components/LatestCode";
import userData from "@constants/data";

export default function about({ repositories }) {
  return (
    <ContainerBlock>
      
      <AboutMe />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  
  let token = process.env.GITHUB_AUTH_TOKEN;
  console.log(token);

  const repositories = await getLatestRepos(userData, token);
  console.log("REPOSITORIES", repositories);
  console.log(token);

  if(repositories == undefined){
  return {
    undefined:undefined,
  }
}

  return {
    props: {
      repositories 
    },
  };
};