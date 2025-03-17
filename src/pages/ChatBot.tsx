import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ReactMarkdown from 'react-markdown';
import Typewriter from 'typewriter-effect';
import { projects } from './Projects';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  link?: string;
}

interface QAPair {
  question: string;
  answer: string;
  keywords: string[];
}

interface PageContent {
  title: string;
  content: string;
  type: 'home' | 'about' | 'project' | 'blog';
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: JSX.Element;
  highlights: string[];
  logo?: string;
}

interface Certification {
  name: string;
  issuer: string;
  issue_date: string;
  url: string;
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
        <p>Led the design and implementation of user-centered interfaces, ensuring a seamless and intuitive experience across all platforms.</p>
      </>
    )
  },
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
        <p>Owned the end-to-end user experience, ensuring consistency and alignment across the entire product.</p>
      </>
    )
  },
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
        <p>Redesigned and restructured the company's SaaS platform as its core product.</p>
      </>
    )
  }
];
interface Certification {
  name: string;
  issuer: string;
  issue_date: string;
  url: string;
}

const certifications: Certification[] = [
    {
        name: "Design Accessibility",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/J2H1APW6OAWQ"
      },
      {
        name: "CSS for Designers",
        issuer: "uxcel.jpg",
        issue_date: "2023-10-01",
        url: "https://app.uxcel.com/certificates/JBV4Y1HS3GGU"
      },
      {
        name: "UX Design Patterns",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/Z3H0KAFWK2VO"
      },
      {
        name: "AI in UI/UX Design",
        issuer: "uxcel.jpg",
        issue_date: "2023-11-01",
        url: "https://app.uxcel.com/certificates/DE6BXL81SLBL"
      },
      {
        name: "Service Design",
        issuer: "uxcel.jpg",
        issue_date: "2023-10-01",
        url: "https://app.uxcel.com/certificates/9X6YRG5QKIWW"
      },
      {
        name: "Design Mentorship Mastery",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/BRRRMSFZ9CRW"
      },
      {
        name: "Google UX Design Specialization",
        issuer: "google.svg",
        issue_date: "2022-07-01",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/CJJRPFVZZT7N"
      },
      {

        name: "Full Stack Web Development with Angular",
        issuer: "coursera.png",
        issue_date: "2022-07-08",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/U4L3QUL2PD7N"
      },
      {
        name: "UX Writing",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/H6KN2MVEECY4"
      },
      {
        name: "UI Components I",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/96C7CV04Z8EY"
      },
      {
        name: "Color Psychology",
        issuer: "uxcel.jpg",
        issue_date: "2023-09-01",
        url: "https://app.uxcel.com/certificates/CSL2Q6MDDTHI"
      }
    ];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
  };

  // Add initial message with suggested questions
  useEffect(() => {
    const questions = [
      "What is your professional experience?",
      "Tell me about your UI/UX design skills",
      "What projects have you worked on?",
      "What are your certifications?",
      "What tools and technologies do you use?",
      "Can you describe your design process?"
    ];

    const initialMessage: Message = {
      id: Date.now().toString(),
      text: "Hi! I'm SinCher's digital pet. You can ask me about:\n\n" +
        questions.map(q => `<question>${q}</question>`).join('\n') +
        "\n\nFeel free to ask any of these questions or phrase them in your own way!",
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const extractPageContent = (): PageContent[] => {
    const pageContents: PageContent[] = [];

    // Add home page content with professional summary
    pageContents.push({
      title: "Professional Summary",
      content: "I'm SinCher, a Senior UI/UX Designer with extensive experience in creating intuitive digital experiences. I specialize in user-centered design, design systems, analytics integration, and cross-functional team collaboration. My expertise spans UI/UX design, branding, and marketing, with a proven track record of delivering impactful solutions across various platforms.",
      type: "home"
    });

    // Add experience content
    experiences.forEach(exp => {
      pageContents.push({
        title: `${exp.title} at ${exp.company}`,
        content: `Role: ${exp.title} at ${exp.company} (${exp.duration})\n\nKey Achievements:\n${exp.highlights.map(h => `• ${h}`).join('\n')}`,
        type: "about"
      });
    });

    // Add projects content with detailed information
    projects.forEach(project => {
      pageContents.push({
        title: project.title,
        content: `Project: ${project.title}\n${project.description}\n\nTechnologies: ${project.tools.join(', ')}\nKey Areas: ${project.tags.join(', ')}`,
        type: "project"
      });
    });

    // Add certifications with detailed information
    certifications.forEach(cert => {
      pageContents.push({
        title: cert.name,
        content: `Certification: ${cert.name}\nIssued by: ${cert.issuer}\nDate: ${cert.issue_date}\nVerification: ${cert.url}`,
        type: "about"
      });
    });

    return pageContents;
  };

  const findBestMatch = (userMessage: string, qaPairs: QAPair[]) => {
    const userWords = userMessage.toLowerCase().split(/\s+/);
    let bestMatch = { answer: '', score: 0, link: '' };
    
    // Define recruitment-related keywords
    const recruitmentKeywords = ['experience', 'skills', 'work', 'hire', 'job', 'position', 'background', 'qualification', 'expertise', 'resume', 'cv'];
    const isRecruitmentQuery = userWords.some(word => recruitmentKeywords.includes(word));
    
    // Define skill-related keywords
    const skillKeywords = ['design', 'ui', 'ux', 'tools', 'software', 'analytics', 'figma', 'adobe', 'prototyping'];
    const isSkillQuery = userWords.some(word => skillKeywords.includes(word));
  
    // Define project-related keywords
    const projectKeywords = ['project', 'portfolio', 'case study', 'work', 'achievement', 'developed', 'created'];
    const isProjectQuery = userWords.some(word => projectKeywords.includes(word));
  
    // Search in QA pairs from Supabase
    qaPairs.forEach((pair) => {
      const questionWords = pair.question.toLowerCase().split(/\s+/);
      const keywords = pair.keywords || [];
      let matchScore = 0;
  
      userWords.forEach((word) => {
        if (questionWords.includes(word)) matchScore += 2;
        if (keywords.includes(word.toLowerCase())) matchScore += 1;
      });
  
      const scorePercentage = matchScore / (userWords.length * 2);
      if (scorePercentage > bestMatch.score) {
        bestMatch = { answer: pair.answer, score: scorePercentage, link: '' };
      }
    });
  
    // Search in page contents with enhanced scoring and formatting
    const pageContents = extractPageContent();
    pageContents.forEach((content) => {
      const contentWords = content.content.toLowerCase().split(/\s+/);
      let matchScore = 0;
  
      userWords.forEach((word) => {
        if (contentWords.includes(word)) matchScore += 1;
        if (content.title.toLowerCase().includes(word)) matchScore += 2;
        // Boost score for relevant content based on query type
        if (isRecruitmentQuery && (content.type === 'about' || content.title.includes('Professional Summary'))) {
          matchScore += 2;
        }
        if (isSkillQuery && content.content.toLowerCase().includes('tools')) {
          matchScore += 2;
        }
        if (isProjectQuery && content.type === 'project') {
          matchScore += 2;
        }
      });
  
      const scorePercentage = matchScore / (userWords.length * 2);
      if (scorePercentage > bestMatch.score) {
        bestMatch = { 
          answer: formatAnswer(content),
          score: scorePercentage,
          link: content.type === 'project' ? `/projects` : `/${content.type}`
        };
      }
    });
  
    if (bestMatch.score <= 0.3) {
      if (isRecruitmentQuery) {
        return {
          answer: "Let me tell you about my professional journey! 🚀\n\nI'm a Senior UI/UX Designer with expertise in:\n\n• User-centered interface design\n• Design systems development\n• Analytics integration (GA/GTM)\n• Data visualization and dashboards\n• Process automation\n\nI've had the pleasure of working with:\n\n1. Pulsifi Pte. Ltd (Current)\n- Led user-centered interface design\n- Developed scalable design systems\n- Integrated analytics for optimization\n\n2. TOGL Technology\n- Owned end-to-end UX strategy\n- Maintained brand integrity\n- Led design walkthroughs\n\n3. GoKudos\n- Redesigned SaaS platform\n- Created user-centric designs\n- Developed marketing materials\n\nWould you like to know more about any specific role or project? 😊",
          score: 1,
          link: '/about'
        };
      }
      
      if (isSkillQuery) {
        return {
          answer: "Let me share my technical toolkit! 🛠️\n\nDesign Tools:\n• Figma (Advanced proficiency)\n• Adobe Suite\n• Sketch\n• NG-ZORRO\n\nAnalytics & Data:\n• Google Analytics\n• Google Tag Manager\n• Looker Studio\n\nDevelopment Knowledge:\n• HTML/CSS\n• React basics\n• Responsive design\n\nMethodologies:\n• User-centered design\n• Design thinking\n• Agile/Scrum\n\nI'm constantly learning and expanding my skillset. Is there a specific area you'd like to know more about? 💡",
          score: 1,
          link: '/about'
        };
      }
  
      if (isProjectQuery) {
        return {
          answer: "I'd love to share some of my key projects! 🎯\n\nRecent Highlights:\n\n1. Pulsifi SaaS Navigation\n• Improved platform navigation\n• Developed scalable design system\n• Enhanced user experience\n\n2. Analytics Integration\n• Implemented GA/GTM\n• Created performance dashboards\n• Data-driven optimization\n\n3. Knowledge Base Chatbot\n• AI-powered assistance\n• Improved user engagement\n• Enhanced information access\n\nEach project showcases my commitment to creating intuitive, user-centered designs. Would you like to explore any of these in detail? 🚀",
          score: 1,
          link: '/projects'
        };
      }
      
      if (userMessage.toLowerCase().includes('design process')) {
        return {
          answer: "My design process is systematic and user-focused! 🎯\n\n1. Early Technical Understanding\n• Collaborate with engineers\n• Validate technical feasibility\n• Explore solution space\n\n2. Core Experience Focus\n• Prioritize essential needs\n• Break down requirements\n• Plan MVP and enhancements\n\n3. Collaborative Development\n• Work closely with developers\n• Speak their language\n• Offer multiple solutions\n\n4. Iterative Improvement\n• Gather user feedback\n• Conduct testing\n• Refine solutions\n\nThis approach has proven successful across various projects. Would you like to see how I've applied this in specific cases? 💡",
          score: 1,
          link: '/projects'
        };
      }
      
      return { 
        answer: "I apologize, but I'm not quite sure what you're asking about. Feel free to ask about:\n\n• My professional experience\n• UI/UX design skills\n• Recent projects\n• Design process\n• Tools and technologies\n• Certifications\n\nOr you can rephrase your question, and I'll do my best to help! 😊", 
        score: 0, 
        link: '' 
      };
    }
  
    return bestMatch;
  };

  const formatAnswer = (content: PageContent) => {
    let formattedAnswer = '';
    
    switch (content.type) {
      case 'about':
        formattedAnswer = `Let me tell you about ${content.title}! 🚀\n\n${content.content}`;
        break;
      case 'project':
        formattedAnswer = `Here's an exciting project: ${content.title} 🎯\n\n${content.content}`;
        break;
      default:
        formattedAnswer = content.content;
    }
  
    // Add emojis and formatting
    formattedAnswer = formattedAnswer
      .replace(/Tools:/g, '🛠️ Tools:')
      .replace(/Technologies:/g, '💻 Technologies:')
      .replace(/Key Areas:/g, '🎯 Key Areas:')
      .replace(/Role:/g, '👨‍💼 Role:')
      .replace(/Key Achievements:/g, '✨ Achievements:');
  
    return formattedAnswer;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const [{ data: qaPairs, error: qaError }, { data: certifications, error: certError }] = await Promise.all([
        supabase.from('qa_pairs').select('*'),
        supabase.from('certifications').select('*')
      ]);

      if (qaError) throw qaError;
      if (certError) throw certError;

      const botResponse = findBestMatch(inputMessage, qaPairs || []);
      setIsTyping(true);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse.answer,
        sender: 'bot',
        timestamp: new Date(),
        link: botResponse.link
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error in chat:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'An error occurred. Please try again later.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsTyping(false), 1000);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 font-medium mt-2 inline-block cursor-pointer"
          >
            ← Back
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 p-4 border-b">
            <h2 className="text-lg font-semibold">Sloth</h2>
            <p className="text-sm text-gray-500">Ask me anything about my projects and experience</p>
          </div>

          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'user' 
                    ? 'bg-white text-gray-800 shadow-sm rounded-full' 
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}
                >
                  {message.sender === 'bot' && isTyping && message === messages[messages.length - 1] ? (
                    <Typewriter
                      options={{
                        delay: 50,
                        cursor: '|',
                        cursorClassName: 'text-blue-500 animate-pulse',
                        skipAddStyles: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(message.text)
                          .callFunction(() => {
                            setTimeout(scrollToBottom, 100);
                          })
                          .start();
                      }}
                    />
                  ) : (
                    <div className="prose prose-sm max-w-none">
                      {message.text.split(/\n/).map((line, index) => {
                        const questionMatch = line.match(/<question>(.+?)<\/question>/);
                        if (questionMatch) {
                          return (
                            <div key={index} className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => handleQuestionClick(questionMatch[1])}>
                              • {questionMatch[1]}
                            </div>
                          );
                        }
                        return (
                          <div key={index}>
                            {line.split(/\s+/).map((word, wordIndex) => {
                              if (word.match(/^(https?:\/\/[^\s]+)$/)) {
                                return (
                                  <a
                                    key={wordIndex}
                                    href={word}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 mt-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                  >
                                    Open Link
                                  </a>
                                );
                              }
                              return word + ' ';
                            })}
                          </div>
                        );
                      })}
                      {message.link && (
                        <Link to={message.link} className="text-blue-500 hover:underline mt-2 inline-block">
                          View page →
                        </Link>
                      )}
                    </div>
                  )}
                  <span className="text-xs opacity-75 mt-1 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[70%] rounded-bl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;