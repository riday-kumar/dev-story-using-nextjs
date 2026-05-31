import Title from "@/components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  const { slug } = await params;
  const [topic, page_no, , subject, technology] = slug || [];

  return (
    <div>
      <Title>{technology} tutorials</Title>
      <h2>{topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">Subject : {subject}</h3>
        <p>Page No :{page_no}</p>
      </div>
    </div>
  );
};

export default TutorialPage;
