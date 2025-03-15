import React from 'react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: "Transforming Talent Management with AI",
    subtitle: "Pulsifi: Building Better Workplace Culture Through People Data",
    story: "As a UX designer at Pulsifi, I faced the challenge of revolutionizing how organizations understand and develop their people. Working closely with Sarah, an HR Director struggling with talent acquisition, and James, a Department Head focused on team building, I witnessed firsthand how traditional talent management methods were failing in today's dynamic workplace.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "I conducted extensive interviews with HR professionals and team leaders, uncovering the human side of talent management. Through empathy mapping and user journey analysis, we discovered that organizations were making crucial decisions based on gut feelings rather than data-driven insights.",
        insights: ["65% of hiring decisions were purely intuition-based", "Training programs had only 30% effectiveness rate", "Team misalignment led to 40% productivity loss"],
        image: "../assets/images/empathy-mapping.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Using affinity diagrams and problem-definition workshops, I helped the team identify that the core issue wasn't just about hiring or training - it was about understanding people holistically. We needed a solution that could combine objective assessment with cultural fit evaluation.",
        insights: ["Need for objective talent assessment", "Data-driven development planning", "Culture-fit evaluation framework"],
        image: "../assets/images/problem-definition.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "I facilitated ideation sessions with HR experts and organizational psychologists, using techniques like crazy eights and solution sketching. We prototyped various approaches to combine behavioral science with AI, testing each iteration with real users.",
        insights: ["AI-powered trait analysis", "Predictive performance modeling", "Personalized development pathways"],
        image: "../assets/images/ideation-session.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "Through rapid prototyping and user testing, we refined the Pulsifi platform's interface and functionality. I created interactive prototypes that demonstrated how HR teams could access deep insights while maintaining a simple, intuitive user experience.",
        insights: ["Comprehensive talent profiles", "Team dynamics analysis", "Culture alignment metrics"],
        image: "../assets/images/prototype-testing.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The launch of the new Pulsifi platform was a transformative moment. I worked closely with implementation teams to ensure the solution not only met technical requirements but truly solved the human challenges we'd identified.",
        insights: ["85% improvement in hiring success", "40% increase in team performance", "60% better culture alignment"],
        image: "../assets/images/implementation-success.svg"
      }
    ]
  },
  {
    title: "Streamlining Business Operations",
    subtitle: "GoKudos: All-in-One Business Management Solution",
    story: "As the lead designer for GoKudos, I embarked on a journey to solve the operational challenges faced by small business owners. Through my interactions with Lisa, a boutique owner, and Marcus, a startup team leader, I discovered the overwhelming complexity of managing modern businesses with fragmented tools.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "I immersed myself in the daily operations of small businesses, conducting contextual inquiries and day-in-the-life studies. The frustration of switching between multiple tools and losing critical information became painfully clear.",
        insights: ["60% time spent switching between tools", "40% of payments delayed due to poor tracking", "50% of tasks missed due to poor coordination"],
        image: "../assets/images/contextual-inquiry.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Through collaborative journey mapping sessions with business owners, we identified that the real problem wasn't the lack of tools, but their disconnection. I led workshops to visualize the ideal unified workflow that could transform their daily operations.",
        insights: ["Need for integrated workflows", "Centralized data management", "Automated task tracking"],
        image: "../assets/images/journey-mapping.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "Using design studio methodology, I facilitated co-creation sessions with business owners and developers. We rapidly prototyped different approaches to unify essential business functions, testing each iteration with real users in their work environment.",
        insights: ["Unified CRM system", "Integrated payment tracking", "Automated task management"],
        image: "../assets/images/design-studio.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "I developed high-fidelity prototypes that demonstrated the seamless flow between different business functions. Through iterative testing with business owners, we refined the interface to ensure it truly simplified their daily operations.",
        insights: ["Streamlined workflow automation", "Real-time business insights", "Simplified payment collection"],
        image: "../assets/images/high-fidelity.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The launch of GoKudos marked a significant milestone in small business management. I worked closely with early adopters to gather feedback and continuously improve the platform, ensuring it delivered real value to business owners.",
        insights: ["75% reduction in administrative time", "90% faster payment processing", "50% improvement in task completion"],
        image: "../assets/images/launch-feedback.svg"
      }
    ]
  },
  {
    title: "Revolutionizing Travel Booking",
    subtitle: "TogaGo: Your All-in-One Travel Companion",
    story: "Leading the UX design for TogaGo, I tackled the challenge of simplifying complex travel planning, especially for destinations like China. Through extensive user research with travelers like Alex and Maria, I uncovered the deep frustrations with existing travel booking systems.",
    process: [
      {
        stage: "Understanding the Challenge",
        narrative: "I conducted in-depth user interviews and travel journey mapping sessions, revealing how travelers struggled with fragmented booking systems and local transportation planning, particularly in China. The insights were eye-opening.",
        insights: ["Users visited 7+ sites per trip booking", "45% overspent due to fragmented booking", "80% struggled with Chinese train bookings"],
        image: "../assets/images/travel-journey.svg"
      },
      {
        stage: "Finding the Core Problem",
        narrative: "Through analysis of user pain points and service blueprinting, I identified that the core challenge was creating a unified, culturally-aware booking experience. We needed to bridge the gap between global travel standards and local nuances.",
        insights: ["Need for unified booking platform", "Integrated itinerary management", "Localized travel support"],
        image: "../assets/images/service-blueprint.svg"
      },
      {
        stage: "Crafting Solutions",
        narrative: "I led design sprints with travel experts and local guides, creating innovative solutions for seamless travel booking. We prototyped various approaches to integrate multiple travel services while maintaining simplicity.",
        insights: ["One-stop booking system", "Smart itinerary planning", "China travel expertise"],
        image: "../assets/images/design-sprint.svg"
      },
      {
        stage: "Bringing Ideas to Life",
        narrative: "Using interactive prototypes, I tested different user flows with diverse traveler groups. The iterative design process helped us create an interface that felt intuitive regardless of the user's cultural background.",
        insights: ["Comprehensive travel marketplace", "Intelligent price comparison", "Seamless mobile experience"],
        image: "../assets/images/interactive-prototype.svg"
      },
      {
        stage: "Making it Real",
        narrative: "The launch of TogaGo transformed how people plan their travels to complex destinations. I continued to gather user feedback and metrics, using the insights to refine and enhance the platform.",
        insights: ["65% reduction in booking time", "30% average cost savings", "95% user satisfaction for China trips"],
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
              href="mailto:sincher.er@gmail.com"
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