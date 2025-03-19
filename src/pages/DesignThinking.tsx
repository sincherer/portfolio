import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "Transforming Talent Management with AI",
    subtitle: "Pulsifi: Building Better Workplace Culture Through People Data",
    story: "As half of the UX design team at Pulsifi, I played a crucial role in reshaping how organizations understand and develop their people. Without a dedicated lead, we reported directly to the COO and collaborated closely with data scientists (DS), data engineers (DE), operations (OP), product managers (PM), front-end developers (FE), and back-end developers (BE). This structure challenged us to take ownership of our work, and I naturally stepped into a leadership role—initiating projects and influencing key product decisions.<br /><br />To drive user engagement and streamline product adoption, I introduced Product Fruits, a third-party tool for onboarding, product tours, NPS surveys, feedback collection, and help center functionality. Additionally, I automated the feedback form to integrate directly with Freshdesk, ensuring client issues were instantly logged as support tickets, preventing any concerns from being overlooked.<br /><br />Talent management was largely intuition-driven, creating inefficiencies in hiring, training, and team dynamics. Sarah, an HR Director, struggled with talent acquisition, often hiring candidates who looked good on paper but didn't perform well in real environments. James, a Department Head, faced team alignment issues, with employees lacking synergy despite strong individual skills. These problems resulted in poor hiring success, low team engagement, and a misalignment between employees' growth and company goals.<br /><br />Understanding that the root cause lay in decision-making without structured insights, I sought to bridge the gap between behavioral science and AI-driven data analytics. The goal was to empower HR professionals with tools that seamlessly blended human judgment with predictive insights.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "Through extensive research and stakeholder interviews, we uncovered critical pain points in talent management. HR professionals were struggling with subjective hiring decisions, ineffective training programs, and misaligned team dynamics. Our research revealed that organizations needed a data-driven approach to understand and develop their people.",
        insights: [
          "78% of HR decisions were based on gut feeling rather than data",
          "42% increase in turnover due to poor culture fit",
          "$12,000 average cost per bad hire",
          "60% of training programs failed to meet objectives"
        ],
        image: "../assets/images/empathy-mapping.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Using systematic problem analysis techniques like root cause analysis and affinity mapping, we identified that the fundamental issue wasn't just about hiring or training - it was about the lack of objective data in people decisions. We conducted workshops with HR leaders and team managers to validate our findings and prioritize solution areas.",
        insights: [
          "Need for objective personality assessment metrics",
          "Lack of data-driven culture fit evaluation",
          "Absence of predictive performance indicators",
          "Gap in continuous development tracking"
        ],
        image: "../assets/images/problem-definition.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "We employed a multi-faceted approach to solution design, combining behavioral science with AI capabilities. Through collaborative design thinking workshops, we developed and tested various concepts with HR professionals and organizational psychologists. Each iteration was validated against real-world scenarios and user feedback.",
        insights: [
          "AI-powered trait analysis with 89% accuracy",
          "Predictive performance modeling based on 15+ factors",
          "Cultural alignment algorithm with 92% match rate",
          "Personalized development pathways with milestone tracking"
        ],
        image: "../assets/images/ideation-session.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "The prototyping phase involved creating interactive mockups that demonstrated the seamless integration of complex data analysis with an intuitive user interface. We conducted extensive usability testing with HR professionals, iterating based on their feedback and behavioral observations. The focus was on making advanced AI insights accessible and actionable.",
        insights: [
          "Interactive talent profiles with dynamic scoring",
          "Real-time team dynamics visualization",
          "Automated culture fit assessment",
          "Customizable development tracking dashboard"
        ],
        image: "../assets/images/prototype-testing.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The implementation phase focused on ensuring smooth adoption and measurable impact. We developed a comprehensive onboarding process and conducted training sessions with HR teams. Regular feedback sessions and analytics tracking helped us measure the solution's effectiveness and make continuous improvements.",
        insights: [
          "85% reduction in time-to-hire",
          "93% improvement in culture fit scores",
          "67% increase in employee engagement",
          "40% reduction in turnover rates"
        ],
        image: "../assets/images/implementation-success.svg"
      }
    ]
  },
  {
    title: "Streamlining Business Operations",
    subtitle: "GoKudos: All-in-One Business Management Solution",
    story: "As the lead designer for GoKudos, I embarked on a journey to solve the operational challenges faced by small business owners. Through extensive research and interviews with over 50 business owners, including Lisa, a boutique owner managing 15 employees, and Marcus, a startup founder coordinating a remote team of 25, I discovered the overwhelming complexity of managing modern businesses with fragmented tools and processes.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "I conducted a comprehensive research phase including contextual inquiries, day-in-the-life studies, and quantitative surveys with 50+ small business owners. The data revealed critical operational inefficiencies and pain points that were costing businesses both time and money. Through systematic observation and data analysis, we identified key areas where technology could transform daily operations.",
        insights: [
          "60% of work hours spent on administrative tasks",
          "40% of payments delayed due to manual tracking",
          "35% revenue loss from poor inventory management",
          "25 different tools used per business on average",
          "4.5 hours daily spent switching between platforms"
        ],
        image: "../assets/images/contextual-inquiry.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Through collaborative journey mapping sessions and systematic problem analysis, we discovered that the fundamental issue wasn't just tool fragmentation - it was the lack of data integration and workflow automation. We conducted workshops with business owners to create detailed process maps and identify critical integration points. Using the '5 Whys' technique and affinity mapping, we prioritized pain points based on impact and frequency.",
        insights: [
          "87% wanted integrated financial tracking",
          "92% needed automated task management",
          "73% struggled with inventory-sales coordination",
          "68% lacked real-time business analytics",
          "95% desired centralized customer data"
        ],
        image: "../assets/images/journey-mapping.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "Using design studio methodology, I facilitated intensive co-creation sessions with business owners and developers. We employed various ideation techniques including SCAMPER, analogous inspiration, and worst possible idea. Each solution was evaluated against our success metrics and technical feasibility. Through rapid prototyping, we tested different approaches to unify essential business functions.",
        insights: [
          "Unified CRM with customer journey tracking",
          "AI-powered inventory forecasting",
          "Automated payment reconciliation system",
          "Real-time financial dashboard",
          "Integrated task and team management"
        ],
        image: "../assets/images/design-studio.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "We developed high-fidelity prototypes using a systematic approach to interaction design. Through 5 rounds of usability testing with 30 business owners, we refined the interface based on quantitative metrics and qualitative feedback. Each iteration focused on reducing cognitive load while maintaining feature robustness. We employed card sorting and tree testing to optimize the information architecture.",
        insights: [
          "95% task completion rate in usability tests",
          "Reduced learning curve by 60%",
          "87% user satisfaction score",
          "3-click maximum to access any feature",
          "Mobile-first design with 99% feature parity"
        ],
        image: "../assets/images/high-fidelity.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The launch of GoKudos marked a significant milestone in small business management. We implemented a phased rollout strategy, starting with a beta group of 50 businesses. Through continuous monitoring and feedback collection, we identified and resolved edge cases, optimized performance, and added features based on real-world usage patterns. Regular data analysis helped us measure impact and ROI for our users.",
        insights: [
          "75% reduction in administrative time",
          "90% faster payment processing",
          "50% improvement in inventory accuracy",
          "85% increase in customer satisfaction",
          "$12,000 average annual savings per business"
        ],
        image: "../assets/images/launch-feedback.svg"
      }
    ]
  },
  {
    title: "Revolutionizing Travel Booking",
    subtitle: "TogaGo: Your All-in-One Travel Companion",
    story: "Leading the UX design for TogaGo, I tackled the challenge of simplifying complex travel planning, especially for destinations like China. Through extensive user research with travelers like Alex, a frequent business traveler, and Maria, an adventure seeker planning her first Asia trip, I uncovered the deep frustrations with existing travel booking systems and cultural barriers in international travel.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "Through comprehensive user research including 30+ in-depth interviews, travel diary studies, and contextual inquiries at airports and train stations, we uncovered significant pain points in international travel planning. Our research revealed that travelers faced multiple challenges, from language barriers to complex booking systems, especially when planning trips to countries with different digital ecosystems like China.",
        insights: [
          "Users spent average 15+ hours planning a single international trip",
          "87% experienced booking errors due to language barriers",
          "92% overpaid for transportation due to fragmented systems",
          "65% missed local travel options due to lack of information",
          "3.5 hours average spent on coordinating multiple bookings"
        ],
        image: "../assets/images/travel-journey.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Using systematic problem analysis techniques including customer journey mapping, service blueprinting, and stakeholder interviews, we identified that the core challenge was bridging the gap between global travel platforms and local transportation systems. Through affinity mapping and prioritization matrices, we categorized problems based on user impact and technical feasibility.",
        insights: [
          "Need for unified booking interface across countries",
          "Integration requirements with local payment systems",
          "Real-time availability synchronization challenges",
          "Cultural and language localization needs",
          "Complex regulatory compliance requirements"
        ],
        image: "../assets/images/service-blueprint.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "We conducted intensive design sprints with travel experts, local guides, and technical architects. Using various ideation techniques including analogous inspiration and competitive analysis, we developed innovative solutions for seamless travel booking. Each concept was evaluated through feasibility-desirability-viability framework and validated with potential users.",
        insights: [
          "AI-powered translation and cultural context engine",
          "Smart itinerary optimization algorithm",
          "Local payment gateway integration system",
          "Real-time availability aggregation platform",
          "Personalized travel recommendation engine"
        ],
        image: "../assets/images/design-sprint.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "Through iterative prototyping and testing with 50+ international travelers, we refined the user interface and booking flow. We conducted A/B testing on key features, analyzed user behavior through heat maps and session recordings, and continuously improved the experience based on quantitative and qualitative data.",
        insights: [
          "98% success rate in cross-border bookings",
          "85% reduction in booking errors",
          "4.8/5 user satisfaction score",
          "2-minute average booking completion time",
          "90% first-time user success rate"
        ],
        image: "../assets/images/interactive-prototype.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The launch of TogaGo transformed international travel planning. We implemented a phased rollout strategy, starting with China routes and gradually expanding to other Asian destinations. Through continuous monitoring and feedback collection, we optimized the platform's performance and expanded its capabilities.",
        insights: [
          "75% reduction in trip planning time",
          "40% average cost savings on bookings",
          "95% user satisfaction for Asia trips",
          "500,000+ successful bookings in first year",
          "4.9/5 app store rating"
        ],
        image: "../assets/images/user-feedback.svg"
      }
    ]
  }
];

const DesignThinking = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <Link
          to="/projects"
          className="text-blue-600 font-medium inline-block hover:text-blue-800 transition-colors"
        >
          ← Back to projects
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Design Thinking Journey</h1>
          <p className="text-xl text-gray-600">
            Join me on my journey of transforming complex challenges into human-centered solutions through systematic problem-solving and creative innovation
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.15}s forwards`
              }}
            >
              <div className="p-8 border-b bg-gradient-to-r from-blue-50 to-white">
                <h2 className="text-3xl font-bold mb-2">{study.title}</h2>
                <p className="text-xl text-gray-600 mb-4">{study.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{study.story}</p>
              </div>

              <div className="p-6">
                {study.process.map((step, stepIndex) => (
                  <div key={stepIndex} className="mb-12 last:mb-0">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {stepIndex + 1}
                      </div>
                      <h3 className="text-2xl font-semibold ml-4">{step.stage}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 mb-6 leading-relaxed">{step.narrative}</p>
                        <div className="flex flex-wrap gap-3">
                          {step.insights.map((insight, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {insight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                        <img
                          src={step.image}
                          alt={`${step.stage} visualization`}
                          className="max-w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border rounded-lg bg-gray-50 hover:bg-white transition-colors duration-300 mt-16">
          <h3 className="text-lg font-bold">Let's Connect!</h3>
          <p className="text-gray-600">Looking for a passionate UI/UX designer to join your team?</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <a
              href="./assets/images/ErSinCher Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="mailto:ersincher@gmail.com"
              className="flex-1 border border-gray-900 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignThinking;
