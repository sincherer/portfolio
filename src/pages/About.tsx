import React from 'react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: JSX.Element;
}

const experiences: Experience[] = [
    {
        title: 'Senior UI/UX Designer',
        company: 'Pulsifi Pte. Ltd',
        duration: '2023 - Present',
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
        duration: '2022 - 2023',
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
    duration: '2021 - 2022',
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
    duration: '2020 - 2021',
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
    duration: '2018 - 2020',
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
        Played a key role in the company’s expansion, successfully managing the launch 
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
    duration: '2016 - 2017',
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
    duration: '2013 - 2015',
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
    duration: '2012 - 2013',
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
  return (
    <div className=" min-h-screen">
     
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600">
            I am a passionate UI/UX designer with over a decade of experience in creating user-centered designs for web and mobile applications. My expertise lies in transforming complex problems into intuitive and delightful user experiences. I enjoy collaborating with cross-functional teams to deliver impactful solutions that drive business success.
          </p>
        </section>

        {/* Language Section */}
        <div className=" mb-12">
          <h1 className="text-2xl font-bold mb-4">Languages</h1>
          <div className="flex flex-wrap gap-2  mt-4">
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Mandarin</span>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">English</span>
            <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Malay</span>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
          <div className="mt-6 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                <span className="text-gray-700">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
          <ul className="mt-4 space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
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
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12">
        <p>© 2025 SinCher. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;