import React from "react";
import "./Services.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiSpringboot,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

const services = [
  {
    id: "ai",
    icon: <BrainCircuit size={34} />,
    title: "Artificial Intelligence",
    desc: "Machine Learning, Generative AI, Predictive Analytics & Intelligent Automation.",
  },
  {
     id: "cloud",
    icon: <Cloud size={34} />,
    title: "Cloud Engineering",
    desc: "AWS, Azure & Google Cloud infrastructure built for scalability and security.",
  },
  {
     id: "web",
    icon: <Code2 size={34} />,
    title: "Web Development",
    desc: "Modern responsive web applications with React, Next.js and enterprise technologies.",
  },
  {
      id: "mobile",
    icon: <Smartphone size={34} />,
    title: "Mobile Applications",
    desc: "Beautiful Android & iOS apps with exceptional user experiences.",
  },
  {
    id: "uiux",
    icon: <Palette size={34} />,
    title: "UI / UX Design",
    desc: "Minimal, premium and user-focused interfaces for modern digital products.",
  },
  {
    id: "cyber",
    icon: <ShieldCheck size={34} />,
    title: "Cyber Security",
    desc: "Enterprise-grade security solutions protecting applications and infrastructure.",
  },
  {
    id: "analytics",
    icon: <Database size={34} />,
    title: "Data Analytics",
    desc: "Business Intelligence dashboards and powerful real-time analytics.",
  },
  {
     id: "devops",
    icon: <Cpu size={34} />,
    title: "DevOps & Automation",
    desc: "CI/CD, Docker, Kubernetes and automated deployment pipelines.",
  },
  {
    id: "enterprise",
  icon: <Database size={34} />,
  title: "Enterprise Solutions",
  desc: "End-to-end ERP business process solutions including P2P, O2C, R2R, H2R, M2M and S2P for digital enterprise transformation.",
},
{
  id: "oracle",
  icon: <Cloud size={34} />,
  title: "Oracle ERP Solutions",
  desc: "Oracle ERP Cloud, Oracle NetSuite, OCI, CRM, EBS Migration, ERP Implementation and Managed Services.",
},
];
const enterpriseSolutions = [
  {
    title: "P2P",
    full: "Procure to Pay",
    desc: "Purchase requisition → supplier payment → reconciliation.",
  },
  {
    title: "O2C",
    full: "Order to Cash",
    desc: "Sales order → customer payment → cash application.",
  },
  {
    title: "R2R",
    full: "Record to Report",
    desc: "Closing books → financial statements → compliance.",
  },
  {
    title: "H2R",
    full: "Hire to Retire",
    desc: "Employee lifecycle: hire → manage → pay → develop → retire.",
  },
  {
    title: "M2M",
    full: "Manufacturing to Maintenance",
    desc: "Plan → produce → deliver → maintain products.",
  },
  {
    title: "S2P",
    full: "Source to Pay",
    desc: "Supplier sourcing → negotiation → purchase → settlement.",
  },
];
const oracleSolutions = [
{
title:"Oracle ERP Cloud",
desc:"Complete cloud ERP platform."
},
{
title:"Oracle NetSuite",
desc:"Cloud ERP for growing businesses."
},
{
title:"OCI",
desc:"Oracle Cloud Infrastructure services."
},
{
title:"CRM",
desc:"Customer relationship management."
},
{
title:"EBS Migration",
desc:"Upgrade Oracle EBS to Cloud."
},
{
title:"Managed Services",
desc:"24x7 Oracle ERP support."
}
];

const technologies = [
  {
    name: "React",
    icon: <FaReact size={42} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={42} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={42} />,
  },
  {
    name: "Java",
    icon: <FaJava size={42} />,
  },
  {
    name: "Python",
    icon: <FaPython size={42} />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={42} />,
  },
  {
    name: "AWS",
    icon: <FaAws size={42} />,
  },
{
  name: "Azure",
  icon: <VscAzure size={42} />,
},  {
    name: "Docker",
    icon: <FaDocker size={42} />,
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes size={42} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={42} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={42} />,
  },
];
// const process = [
//   {
//     no: "01",
//     title: "Discover",
//     desc: "Understanding business goals and project vision.",
//   },
//   {
//     no: "02",
//     title: "Strategy",
//     desc: "Planning architecture,technology",
//   },
//   {
//     no: "03",
//     title: "Develop",
//     desc: "Building secure, scalable and modern solutions.",
//   },
//   {
//     no: "04",
//     title: "Launch",
//     desc: "Deployment, monitoring and continuous support.",
//   },
// ];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <>
      <Navbar />
{selectedService && (

<div
    className="service-modal-overlay"
    onClick={() => setSelectedService(null)}
>

<div
    className="service-modal"
    onClick={(e)=>e.stopPropagation()}
>

<button
className="close-btn"
onClick={()=>setSelectedService(null)}
>
✕
</button>

<h2>

{services.find(s=>s.id===selectedService)?.title}

</h2>

<p className="modal-desc">

{services.find(s=>s.id===selectedService)?.desc}

</p>

{/* Enterprise */}

{selectedService==="enterprise" && (

<div className="modal-grid">

{enterpriseSolutions.map((item,index)=>(

<div className="modal-card" key={index}>

<h3>{item.title}</h3>

<h4>{item.full}</h4>

<p>{item.desc}</p>

</div>

))}

</div>

)}

{/* Oracle */}

{selectedService==="oracle" && (

<div className="modal-grid">

{oracleSolutions.map((item,index)=>(

<div className="modal-card" key={index}>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

)}

</div>

</div>

)}
      <div className="services-page">

        {/* ================= HERO ================= */}

        <section className="services-hero">

          <div className="hero-glow glow1"></div>
          <div className="hero-glow glow2"></div>
          <div className="hero-glow glow3"></div>

          <div className="services-hero-content">

            <span className="hero-tag">
              FUTURE READY DIGITAL SOLUTIONS
            </span>

            <h1>
              Empowering Businesses
              <span>Through Innovation</span>
            </h1>

            <p>
              Belnova Technologies delivers intelligent software,
              AI-powered automation, cloud engineering and digital
              transformation solutions that accelerate business growth.
            </p>

            <button className="hero-btn">
              Explore Services
              <ArrowRight size={18} />
            </button>

          </div>

        </section>
        

        {/* ================= SERVICES ================= */}

        <section className="services-grid-section">

          <div className="section-heading">

            <span>OUR SERVICES</span>

            <h2>
              Solutions Built
              <br />
              For The Future
            </h2>

            <p>
              Innovative technology solutions crafted to transform ideas
              into scalable digital products.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service, index) => (

              <div className="service-card" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

<button
  className="service-btn"
  onClick={() => setSelectedService(service.id)}
>
  View Details
  <ArrowRight size={18} />
</button>

              </div>

            ))}

          </div>

        </section>
        

        {/* ================= WHY BELNOVA ================= */}

        <section className="why-belnova">

          <div className="section-heading">

            <span>WHY BELNOVA</span>

            <h2>
              Why Businesses
              <br />
              Choose Us
            </h2>

          </div>

          <div className="why-grid">

            <div className="why-card">
              <CheckCircle2 />
              <h3>Innovation First</h3>
              <p>
                Modern technologies combined with creative engineering.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle2 />
              <h3>Enterprise Quality</h3>
              <p>
                Secure, scalable and performance-driven software solutions.
              </p>
            </div>

            <div className="why-card">
              <CheckCircle2 />
              <h3>Customer Focused</h3>
              <p>
                Every product is built around business goals and user needs.
              </p>
            </div>

          </div>

        </section>

{/* ================= PROCESS ================= */}

{/* x */}

        {/* ================= TECHNOLOGIES ================= */}

<div className="tech-grid">
  {technologies.map((tech, index) => (
    <div className="tech-card" key={index}>
      <div className="tech-icon">
        {tech.icon}
      </div>

      <h4>{tech.name}</h4>

      <p>Enterprise Ready Technology</p>
    </div>
  ))}
</div>

        {/* ================= CTA ================= */}
        {selectedService === "enterprise" && (
<section className="service-details">

<div className="section-heading">
<span>ENTERPRISE SOLUTIONS</span>
<h2>Business Process Cycles</h2>
<p>Complete ERP Business Process Lifecycle</p>
</div>

<div className="enterprise-grid">

{enterpriseSolutions.map((item,index)=>(

<div className="enterprise-card" key={index}>

<h3>{item.title}</h3>

<h4>{item.full}</h4>

<p>{item.desc}</p>

</div>

))}

</div>

</section>
)}
{selectedService==="oracle" && (

<section className="service-details">

<div className="section-heading">
<span>ORACLE ERP</span>
<h2>Oracle Solutions</h2>
</div>

<div className="enterprise-grid">

{oracleSolutions.map((item,index)=>(

<div className="enterprise-card" key={index}>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</section>

)}
        <section className="cta-section">

          <div className="cta-box">

            <h2>
              Let's Build Your Next Digital Product
            </h2>

            <p>
              Partner with Belnova Technologies to transform your ideas into
              scalable, secure and future-ready digital solutions.
            </p>

            <button>
              Start Your Project
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

      </div>
    </>
  );
};

export default Services;