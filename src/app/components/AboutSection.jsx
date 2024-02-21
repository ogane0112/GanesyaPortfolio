"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from 'react-i18next';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>HTNL/CSS/JavaScript</li>
        <li>React/Next.js</li>
        <li>tailwindCSS</li>
        <li>Python</li>
        <li>C++</li>
        <li>C</li>
        <li>GAS</li>
        <li>VBA</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>入野小学校</li>
        <li>入野中学校</li>
        <li>浜松湖南高校</li>
        <li>名城大学</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>基本情報技術者</li>
        <li>ITパスポート</li>
        <li>JGAP指導員免許 取得</li>
        <li>乙種第4 類危険物取扱者 取得</li>
        <li>Python認定技術者</li>
        <li>重度訪問介護従業者養成研修 修了</li>
        <li>普通自動者第1 種運転免許 取得</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const {t} = useTranslation();
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-base lg:text-lg">
            自分の経歴,スキル,取得資格についてまとめてみました。
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
