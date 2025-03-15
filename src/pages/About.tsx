import React, { useState, useEffect } from 'react';


interface Certification {
  id: string;
  name: string;
  issuer: string;
  issue_date: string;
  url: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "Design Accessibility",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/J2H1APW6OAWQ"
  },
  {
    id: "2",
    name: "CSS for Designers",
    issuer: "uxcel.jpg",
    issue_date: "2023-10-01",
    url: "https://app.uxcel.com/certificates/JBV4Y1HS3GGU"
  },
  {
    id: "3",
    name: "UX Design Patterns",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/Z3H0KAFWK2VO"
  },
  {
    id: "4",
    name: "AI in UI/UX Design",
    issuer: "uxcel.jpg",
    issue_date: "2023-11-01",
    url: "https://app.uxcel.com/certificates/DE6BXL81SLBL"
  },
  {
    id: "5",
    name: "Service Design",
    issuer: "uxcel.jpg",
    issue_date: "2023-10-01",
    url: "https://app.uxcel.com/certificates/9X6YRG5QKIWW"
  },
  {
    id: "6",
    name: "Design Mentorship Mastery",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/BRRRMSFZ9CRW"
  },
  {
    id: "7",
    name: "Google UX Design Specialization",
    issuer: "Google.svg",
    issue_date: "2022-07-01",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/CJJRPFVZZT7N"
  },
  {
    id: "8",
    name: "Full Stack Web Development with Angular",
    issuer: "Coursera.png",
    issue_date: "2022-07-08",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/U4L3QUL2PD7N"
  },
  {
    id: "9",
    name: "UX Writing",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/H6KN2MVEECY4"
  },
  {
    id: "10",
    name: "UI Components I",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/96C7CV04Z8EY"
  },
  {
    id: "11",
    name: "Color Psychology",
    issuer: "uxcel.jpg",
    issue_date: "2023-09-01",
    url: "https://app.uxcel.com/certificates/CSL2Q6MDDTHI"
  }
];

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: JSX.Element;
  highlights: string[];
  logo?: string; // Optional logo path
}

const experiences: Experience[] = [
    {
        title: 'Senior UI/UX Designer',
        company: 'Pulsifi Pte. Ltd',
        duration: 'May 2023 - Present',
        logo: './assets/images/company-logos/pulsifi_logo.jpg',
        highlights: [
          'Led user-centered interface design across platforms',
          'Developed scalable design system for NG-ZORRO',
          'Integrated analytics (GA/GTM) for data-driven optimization',
          'Created Looker Studio dashboard for performance metrics',
          'Automated Google Sheets workflows for operational efficiency'
        ],
        description: (
            <>
          <p>Led the design and implementation of user-centered interfaces,
             ensuring a seamless and intuitive experience across all platforms.</p>
             <br/>  
        <p>Developed and maintained a scalable design system tailored to 
            NG-ZORRO limitations, enhancing design consistency and efficiency.</p>  
        <p>Integrated Google Analytics (GA) and Google Tag Manager (GTM) 
            to track user behavior, providing actionable insights for optimization.</p>  
            <br/>
        <p>Designed a Looker Studio dashboard to visualize key performance metrics,
            enabling real-time data analysis and data-driven decision-making.</p>  
            <br/>
        <p>Automated Google Sheets workflows to monitor critical data thresholds, 
            triggering email notifications to enhance operational efficiency.</p>  
      </>)},
      {
        title: 'Senior UI/UX Designer',
        company: 'TOGL Technology Sdn Bhd',
        duration: 'Aug 2022 - May 2023',
        logo: './assets/images/company-logos/togl logo.jpg',
        highlights: [
          'Led end-to-end user experience design and strategy',
          'Collaborated with cross-functional teams for brand integrity',
          'Developed wireframes and prototypes using Figma',
          'Conducted design walkthroughs for team alignment'
        ],
        description: (
            <>
          <p>Owned the end-to-end user experience, ensuring consistency and 
            alignment across the entire product, from high-level design strategy down to detailed UI 
            layouts for specific features and service flows.</p>  
            <br/>
          <p>Collaborated closely with developers, project managers, and business analysts
             to maintain brand integrity, set design standards, and ensure cohesive aesthetics 
             across all platforms. Identified and leveraged opportunities to enhance web, app,
              mobile, and interactive designs, guided by a deep understanding of user behaviors, 
              needs, and expectations.</p>  
              <br/>
         <p>Expert in design tools including Figma, Adobe Suite, and 
            Sketch, with extensive experience in developing wireframes, user flows,
             mockups, and both low- and high-fidelity prototypes. Led design walkthroughs
              to communicate ideas and align teams on product and design requirements.</p>  
      </>)},
  {
    title: 'UI/UX Designer',
    company: 'GoKudos Sdn Bhd',
    duration: 'Oct 2021 - Aug 2022',
    logo: './assets/images/company-logos/gokudoslogo.jpg',
    highlights: [
      'Redesigned and restructured SaaS platform',
      'Created user-centric designs with Figma',
      'Developed engaging marketing materials',
      'Executed feature rollouts within deadlines'
    ],
    description: (
        <>
      <p>Redesigned and restructured the company's SaaS platform
        as its core product, collaborating closely with the Group CEO,
        Business Developers, and engineers to gather and evaluate user requirements.</p>  
        <br/>
     <p>Utilized Figma and Adobe Suite to create user-centric designs,
        including storyboards, wireframes, user flows, and high-fidelity prototypes,
        enhancing the overall platform experience.</p>  
        <br/>
     <p>Developed engaging marketing materials, including POSM and 
        the company website, ensuring brand consistency and market appeal. 
        Created sales kits to effectively promote the product and support business development.</p>  
        <br/>
    <p>Planned and executed new feature rollouts within deadlines while continuously 
        refining the platform with a clear, smooth, and intuitive user experience.</p>  
  </>)},
  {
    title: 'Senior Marketing Exec.',
    company: 'SICK Sensor Malaysia',
    duration: 'Nov 2020 - June 2021',
    logo: './assets/images/company-logos/sick-logo.png',
    highlights: [
      'Executed high-impact marketing plans',
      'Developed social media and website strategies',
      'Led creation of marketing materials',
      'Managed visual aspects of campaigns'
    ],
    description: (
        <>
      <p>Supported the Engagement Manager, Sales, and Product teams in
        executing high-impact annual marketing and communication plans targeting
        industries in Factory Automation, Logistic Automation, and Process Automation.
        Ensured marketing initiatives were delivered on time, within budget,
        and aligned with the organization’s culture and strategic goals.</p> 
        <br/> 
      <p>Developed and implemented social media and website strategies to enhance 
        brand positioning and drive revenue growth. Managed the overall visual
         aspects of advertising and media campaigns, ensuring a compelling and consistent 
         brand message across all channels.</p>
         <br/> 
     <p>Led the creation of high-quality marketing and communication materials,
        including video production, to engage potential members, stakeholders, 
        and target audiences effectively.</p> 
  </>)},
  {
    title: 'Branding Specialist',
    company: 'KHP Steel Product (M) Sdn Bhd',
    duration: 'Jan 2018 - Nov 2020',
    logo: './assets/images/company-logos/kextra.png',
    highlights: [
      'Led integrated marketing strategies',
      'Managed B2B and B2C brand portfolios',
      'Developed high-impact branding tools',
      'Implemented digital marketing campaigns',
      'Launched new concept store and factory'
    ],
    description: (
        <>
      <p>Developed and executed integrated marketing communication strategies, 
        ensuring alignment with business goals and budget optimization. Supported sales and account 
        management by providing high-impact branding tools that drove sales growth and market expansion.</p>  
        <br/>
      <p>Managed corporate and packaged brands with expertise in 
        both B2B and B2C marketing. Spearheaded creative design and compelling 
        copywriting for digital and print assets, strengthening brand presence across websites, 
        social media, PR, trade, and community engagement.</p>  
        <br/>
      <p>Led the annual marketing and communication plan, 
        aligning strategies with manufacturing priorities and revenue targets. 
        Played a key role in the company's expansion, successfully managing the launch 
        of the 5th concept store and factory.</p>  
        <br/>
      <p>Implemented targeted marketing strategies to drive revenue growth,
        enhance brand positioning, and maximize customer engagement. Leveraged digital
        platforms, including social media and web strategies, to amplify brand reach and 
        accelerate business growth.</p>  
        
  </>)},
{
    title: 'Senior UI/UX Designer',
    company: 'Intelligent Earnings Sdn Bh',
    duration: 'Jan 2016 - Dec 2017',
    logo: './assets/images/company-logos/intelligent-earning.png',
    highlights: [
      'Led design vision and product direction',
      'Enhanced hiring process and team building',
      'Developed diverse mobile applications',
      'Defined company branding and visual direction'
    ],
    description: (
        <>
      <p>Led the design vision and set the product direction, 
        creating new features and overhauling visual designs for both products and 
        marketing to effectively reach target audiences. Played a key role in enhancing 
        the hiring process, refining interview criteria, and successfully recruiting two 
        designers and two videographers.</p> 
        <br/>
      <p>Developed marketing materials aligned with strategic goals 
        and revenue targets while gaining a deep understanding of product perspectives 
        in both B2B and B2C markets. Designed and optimized social media, websites, 
        and mobile applications to maximize user impact and engagement.</p>  
        <br/>
      <p>Worked on diverse mobile applications, including a news app, 
        smart home solutions, a Muslim prayer app, and a headphone companion app, 
        crafting seamless user experiences through wireframes, mockups, 
        and usability improvements.</p>  
        <br/>
      <p>Defined company branding and visual direction, strengthening
        corporate identity. Led the news team to enhance content engagement on
        in-house mobile applications. Managed backend assets and collaborated closely
        with the development team to ensure seamless implementation.</p>  
        <br/>
  </>)},

  {
    title: 'Senior Designer',
    company: 'OPPO Electronics Sdn Bhd',
    duration: 'Jan 2013 - Dec 2015',
    logo: './assets/images/company-logos/oppo_logo.png',
    highlights: [
      'Led Malaysia advertising concept',
      'Managed team of three designers',
      'Developed websites and Android OS visuals',
      'Designed POSM concepts'
    ],
    description:(
        <>
      <p>Led Malaysia’s advertising concept and visual direction, 
        shaping the brand’s first impression in the market. 
        Played a key role in launching OPPO’s phone model with impactful branding and advertising strategies.
        </p>  
        <br/>
        <p>Managed a team of three designers, driving creative execution across digital 
        and physical platforms. Developed websites and supported Android OS 
        visuals while overseeing nationwide advertising campaigns, including cinema, 
        Google AdSense, web, media, street, and billboard advertising.</p>
        <br/> 
        <p>Designed POSM concepts to maximize visual 
            impact and audience engagement. Created compelling social media content 
            to enhance brand presence and drive interaction.</p>  
  </>)},
  {
    title: 'Creative Director',
    company: 'JT Apps Sdn Bhd',
    duration: 'July 2012 - Jan 2013',
    logo: './assets/images/company-logos/jtapps.png',
    highlights: [
      'Led team of three designers',
      'Built brand identities for major clients',
      'Created animation and visual storytelling',
      'Directed photography and videography'
    ],
    description: (
        <>
      <p>Grew from a Multimedia Designer to Creative Director, 
        leading a team of three designers to craft compelling branding and advertising 
        for diverse industries, including F&B, mobile accessories, manufacturing, and recruitment.
      </p><br/>
      <p></p>
      <p>
          Built standout brand identities for:
        </p>
        <ul>
          <li><strong>Ah Huat White Coffee</strong></li>
          <li><strong>Casahana Mooncake</strong></li>
          <li><strong>Ninjaz Mobile Accessories</strong></li>
        </ul>
        <br />
        <p>
          Led the creation of animation, visual storytelling, and e-commerce templates for WeChat and websites.
        </p>
        <br />
        <p>
          Directed and executed high-impact photography and videography, shaping the company’s content marketing, email campaigns, and social media presence.
        </p>
        <br />
        <p>
          Oversaw creative workflow to balance daily execution with strategic innovation, driving sales and marketing success.
        </p>
        </>)},
];

const skills = [
  'User Research',
  'Wireframing & Prototyping',
  'Interaction Design',
  'Visual Design',
  'Usability Testing',
  'Figma',
  'Adobe XD',
  'Sketch',
  'HTML/CSS',
];

const achievements = [
  '🎖️ Shortlisted in the Top 30 at UXcel Design Contest (Dec 2023) – Designed a seamless search and booking experience to help users discover holiday-related events and experiences effortlessly.',
  '🥉 Bronze Winner at Crowbar Awards (Sep 2010) – Recognized among 1,000 entries from 39 global schools in a prestigious competition organized by the Association of Accredited Advertising Agents Singapore (4As)',
  '🏆 Outstanding Prize & Most Voted Prize in Innovation Design at Creative + Recycle = Winning for Charity (2010) – Awarded at a creative event bazaar held at Berjaya Times Square, Kuala Lumpur.',
];

const AboutPage: React.FC = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({});
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 animate-text-focus">About Sin Cher</h2>
          <p className="mt-4 text-gray-600 animate-slide-in">
            I am a passionate UI/UX designer with over a decade of experience in creating user-centered designs for web and mobile applications. My expertise lies in transforming complex problems into intuitive and delightful user experiences. I enjoy collaborating with cross-functional teams to deliver impactful solutions that drive business success.
          </p>
        </section>

        {/* Language Section */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h1 className="text-2xl font-bold mb-4 animate-text-focus">Languages</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full transition-transform hover:scale-105">Mandarin</span>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full transition-transform hover:scale-105">English</span>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full transition-transform hover:scale-105">Malay</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-text-focus">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} 
                className="p-6 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={exp.logo || '/assets/images/company-logos/placeholder-logo.svg'} 
                    alt={`${exp.company} logo`} 
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 animate-slide-in">{exp.title}</h3>
                    <p className="text-sm text-gray-500">{exp.company} | {exp.duration}</p>
                  </div>
                </div>
                
                {/* Highlights */}
                <ul className={`mt-4 space-y-2 transition-all duration-300 ${!expandedDescriptions[index] ? 'hidden' : ''}`}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-2 animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}                  
                </ul>

                {/* Description with Read More */}
                <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600">
                  <div className={`transition-all duration-300 ${!expandedDescriptions[index] ? 'line-clamp-2' : ''}`}>
                    {exp.description}
                  </div>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-600 hover:text-blue-800 font-medium mt-2 transition-colors"
                  >
                    {expandedDescriptions[index] ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <h2 className="text-2xl font-bold text-gray-900 animate-text-focus">Skills</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center space-x-2 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="animate-slide-up" style={{ animationDelay: '800ms' }}>
          <h2 className="text-2xl font-bold text-gray-900 animate-text-focus">Achievements</h2>
          <ul className="mt-4 space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2 animate-slide-in" style={{ animationDelay: `${index * 200}ms` }}>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="mt-16 animate-slide-up" style={{ animationDelay: '1000ms' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-text-focus">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex-shrink-0">
                    <img
                      src={`./assets/images/cert-logos/${cert.issuer.toLowerCase()} `}
                      alt={`${cert.issuer} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {cert.name}
                    </h3>
                    
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Issued {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12 animate-fade-in" style={{ animationDelay: '1000ms' }}>
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

