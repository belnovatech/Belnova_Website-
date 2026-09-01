import React from "react";
import "./Home.css";

// Section Components
import Hero from "./sections/Hero/Hero";
import FeatureStrip from "./sections/FeatureStrip/FeatureStrip";
import InnovationEngine from "./sections/InnovationEngine/InnovationEngine";
import SolutionExplorer from "./sections/SolutionExplorer/SolutionExplorer";
import Capabilities from "./sections/Capabilities/Capabilities";
import TechnologyRadar from "./sections/TechnologyRadar/TechnologyRadar";
import Architecture from "./sections/Architecture/Architecture";
import DigitalTransformation from "./sections/DigitalTransformation/DigitalTransformation";
import WhyUs from "./sections/WhyUs/WhyUs";
import ClientJourney from "./sections/ClientJourney/ClientJourney";
import Industries from "./sections/Industries/Industries";
import Work from "./sections/Work/Work";
import EngagementModels from "./sections/EngagementModels/EngagementModels";
import ResourceOutsourcing from "./sections/ResourceOutsourcing/ResourceOutsourcing";
import Recruitment from "./sections/Recruitment/Recruitment";
import Consulting from "./sections/Consulting/Consulting";
import AiAssessment from "./sections/AiAssessment/AiAssessment";
import DigitalMaturity from "./sections/DigitalMaturity/DigitalMaturity";
import ProjectEstimator from "./sections/ProjectEstimator/ProjectEstimator";
import BelnovaLabs from "./sections/BelnovaLabs/BelnovaLabs";
import Security from "./sections/Security/Security";
import CompanyValues from "./sections/CompanyValues/CompanyValues";
import CareersSection from "./sections/CareersSection/CareersSection";
import InsightsSection from "./sections/InsightsSection/InsightsSection";
import FinalCta from "./sections/FinalCta/FinalCta";
import ContactSection from "./sections/ContactSection/ContactSection";
import FloatingControls from "./sections/FloatingControls/FloatingControls";

export default function Home() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCapabilities = () => {
    const capElem = document.getElementById("what-we-do");
    if (capElem) {
      capElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="belNova-home-page">
      <Hero
        onStartProject={scrollToContact}
        onExploreCapabilities={scrollToCapabilities}
      />
      <FeatureStrip />
      <InnovationEngine />
      <SolutionExplorer onDifferentIdea={scrollToContact} />
      <Capabilities onDiscuss={scrollToContact} />
      <TechnologyRadar onDiscussTechnology={scrollToContact} />
      <Architecture />
      <DigitalTransformation onTransform={scrollToContact} />
      <WhyUs />
      <ClientJourney />
      <Industries />
      <Work onTalkToBelnova={scrollToContact} />
      <EngagementModels onFindModel={scrollToContact} />
      <ResourceOutsourcing onRequestResources={scrollToContact} />
      <Recruitment onHireTalent={scrollToContact} />
      <Consulting onHelpDecide={scrollToContact} />
      <AiAssessment onDiscussOpportunity={scrollToContact} />
      <DigitalMaturity onDiscussNextSteps={scrollToContact} />
      <ProjectEstimator onRequestEstimate={scrollToContact} />
      <BelnovaLabs />
      <Security />
      <CompanyValues />
      <CareersSection onApply={scrollToContact} />
      <InsightsSection />
      <FinalCta
        onStartProject={scrollToContact}
        onTalkToTeam={scrollToContact}
      />
      <ContactSection />
      {/* <FloatingControls onLetsTalk={scrollToContact} /> */}
    </main>
  );
}
