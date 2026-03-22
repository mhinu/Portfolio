import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, CheckCircle, Award, Briefcase, GraduationCap, Code, Database, TrendingUp, Users, Target, Globe, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_1h1h38t',
    'template_bb9ujh8',
    form.current,
    'CedxBirx9CS9z9mlc'
  )
  .then(() => {
    alert("Message sent successfully!");
    form.current.reset();
  })
  .catch(() => {
    alert("Failed to send message");
  });
};
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState('technical');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, value: '4+', label: 'Years Academic Experience' },
    { icon: <Globe className="w-6 h-6" />, value: 'International', label: 'Research in Germany' },
    { icon: <Award className="w-6 h-6" />, value: 'Winner', label: 'Management Competitions' },
    { icon: <Code className="w-6 h-6" />, value: '4+', label: 'Live Projects' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] bg-clip-text text-transparent">
                Inayath M H
              </h1>
            </div>

            <div className="hidden md:flex space-x-1 lg:space-x-4">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-[#2D5A3D] bg-green-50'
                      : 'text-gray-700 hover:text-[#2D5A3D] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === link.id
                      ? 'text-[#2D5A3D] bg-green-50'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-section">
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm">
                <span className="text-sm font-semibold text-[#2D5A3D]">MBA Candidate | Business Analytics & Finance</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Focused on {' '}
                <span className="bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] bg-clip-text text-transparent">
                  Learning, Solving, and Driving Business Growth
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600">
                Business Analyst | Data-Driven Decision Making | Finance & Strategy | Driving Business Growth & Stakeholder Value | AI & Automation Enthusiast
              </p>

              <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#2D5A3D]">
                <p className="text-gray-700 leading-relaxed">
                  MBA candidate with a unique blend of scientific research, business acumen, and data analytics expertise.
                  Proven ability to translate complex data into actionable business strategies across diverse sectors.
                  Skilled in AI automation, financial analysis, and stakeholder management. Ready to tackle complex,
                  ambiguous challenges with data-driven problem-solving approach an essential skill in today’s rapidly evolving business landscape
                  thinking the critical skill today's rapidly
                  evolving business landscape demands.
                  Excellent communication and negotiation skills, with the ability to manage stakeholders and drive consensus in complex environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
              {/* View My Work Button */}
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                View My Work
              </button>

              {/* Let's Talk Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-[#2D5A3D] text-[#2D5A3D] rounded-lg font-semibold hover:bg-[#2D5A3D] hover:text-white transition-all duration-200"
              >
                Let’s Talk
              </button>
            </div>
            </div>

            <div className="hidden md:block fade-in-section">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="text-[#2D5A3D] mb-3">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Bridging Agriculture & Analytics for Business Impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 fade-in-section">
              <p className="text-gray-700 leading-relaxed">
                I'm Inayath M H, a passionate business analyst with a unique background combining scientific research,
                horticulture domain knowledge, and advanced business analytics. Currently pursuing my MBA with
                specializations in Finance and Business Analytics, I bring a dual perspective of analytical rigor
                and strategic thinking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey from conducting international research in Germany to building AI-driven workflows in
                startups has equipped me with adaptability, problem-solving skills, and technical expertise. I thrive
                in environments where I can use data to solve real-world challenges, optimize processes, and drive
                decision-making.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When I'm not analyzing data, you'll find me leading community initiatives, participating in business
                competitions, or exploring the latest in AI automation and fintech solutions.
              </p>

              <div className="bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] p-6 rounded-lg text-white">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Career Objective</h3>
                    <p className="text-sm leading-relaxed">
                      Seeking challenging roles in Business Analysis, Data Analytics, Consulting, Finance, Account Management 
                      Business Development, or Operations across diverse industries. Committed to leveraging analytical skills, AI automation, and strategic
                      thinking to solve complex business problems and deliver measurable impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 fade-in-section">
              {[
                { icon: '🌱', title: 'Domain Expertise', desc: 'Deep understanding of horticulture value chains, post-harvest management, agribusiness operations, and supply chain optimization' },
                { icon: '📊', title: 'Analytical Skills', desc: 'Proficient in Power BI, Excel, SQL, Python, R, and Jamovi for transforming raw data into actionable insights' },
                { icon: '🤖', title: 'AI & Automation', desc: 'Completed Code2Cognition AI & Data Science Bootcamp; Built AI agentic workflows; Proficient in n8n automation' },
                { icon: '🌍', title: 'Global Perspective', desc: 'International research experience at University of Hohenheim and Eberhard Karls University Tübingen, Germany' },
                { icon: '💼', title: 'Business Acumen', desc: 'Financial modeling, market research, pricing strategy, cost-benefit analysis, and MSME development' },
                { icon: '🤝', title: 'Leadership', desc: 'Organized farmer programs, led social media club, village leader in RHWE program' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technical & Professional Competencies</p>
          </div>

          <div className="fade-in-section">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'technical', label: 'Technical', icon: <Code className="w-4 h-4" /> },
                { id: 'analytics', label: 'Analytics & Tools', icon: <Database className="w-4 h-4" /> },
                { id: 'finance', label: 'Finance', icon: <TrendingUp className="w-4 h-4" /> },
                { id: 'business', label: 'Business & Strategy', icon: <Briefcase className="w-4 h-4" /> },
                { id: 'core', label: 'Core Skills', icon: <Target className="w-4 h-4" /> },
                { id: 'ai', label: 'AI & Data Science', icon: <Code className="w-4 h-4" /> },
                { id: 'domain', label: 'Domain Expertise', icon: <Globe className="w-4 h-4" /> }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                    activeSkillTab === tab.id
                      ? 'bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
  {activeSkillTab === 'technical' && (
    <div className="flex flex-wrap gap-3">
      {[
        'Data Analysis',
        'Business Intelligence',
        'Dashboard Development',
        'Financial Analysis',
        'Market Research',
        'Workflow Automation'
      ].map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gradient-to-r from-[#2D5A3D]/10 to-[#2563EB]/10 border border-[#2D5A3D]/20 text-gray-800 rounded-full text-sm font-medium hover:from-[#2D5A3D]/20 hover:to-[#2563EB]/20 transition-all duration-300 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  )}

  {activeSkillTab === 'analytics' && (
    <div className="flex flex-wrap gap-3">
      {[
        'Excel', 'Power BI', 'SQL', 'Python', 'R',
        'Jamovi', 'n8n Automation', 'Dashboard Visualization'
      ].map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gradient-to-r from-[#2D5A3D]/10 to-[#2563EB]/10 border border-[#2D5A3D]/20 text-gray-800 rounded-full text-sm font-medium hover:from-[#2D5A3D]/20 hover:to-[#2563EB]/20 transition-all duration-300 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  )}

  {activeSkillTab === 'finance' && (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        'Financial Statement Analysis',
        'Ratio Analysis (Liquidity & Profitability)',
        'Cost Concepts',
        'Budgeting Fundamentals',
        'Pricing Analysis',
        'ROI & Break-even Analysis',
        'MSME Startup Schemes',
        'HS Codes',
        'Tariffs'
      ].map((skill, index) => (
        <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-sm text-gray-700">{skill}</span>
        </div>
      ))}
    </div>
  )}

  {activeSkillTab === 'business' && (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        'Market Research',
        'Sales Performance Analysis',
        'Account Performance Monitoring',
        'Pricing Strategy Evaluation',
        'Business Reporting',
        'Cross-functional Collaboration'
      ].map((skill, index) => (
        <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-sm text-gray-700">{skill}</span>
        </div>
      ))}
    </div>
  )}

  {activeSkillTab === 'core' && (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
        'Client Relationship Management',
        'Stakeholder Communication',
        'Analytical Thinking',
        'Structured Problem Solving',
        'Negotiation',
        'Adaptability',
        'Team Collaboration',
        'Canva'
      ].map((skill, index) => (
        <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-sm text-gray-700">{skill}</span>
        </div>
      ))}
    </div>
  )}

  {activeSkillTab === 'ai' && (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'Machine Learning Concepts',
          'AI-Powered Application Development',
          'AI Agentic Workflows',
          'Data Stories & Visualization',
          'Predictive Analytics',
          'AI Tools & Platforms'
        ].map((skill, index) => (
          <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">{skill}</span>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Bootcamp Training:</strong> Code2Cognition AI & Data Science (4 months) - Redseer Foundation & SIRPI
        </p>
      </div>
    </div>
  )}

  {activeSkillTab === 'domain' && (
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        'Scientific Research & Analysis',
        'Horticulture & Agribusiness',
        'Supply Chain & Logistics',
        'Post-Harvest Management',
        'Process Optimization',
        'Business Operations',
        'Green Finance & Sustainability',
        'Fintech Applications',
        'MSME Development',
        'Cross-Industry Adaptability'
      ].map((skill, index) => (
        <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-sm text-gray-700">{skill}</span>
        </div>
      ))}
    </div>
  )}
</div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-[#2D5A3D]" />
                Languages
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { lang: 'English', level: 'Professional Proficiency' },
                  { lang: 'Kannada', level: 'Native' },
                  { lang: 'Hindi', level: 'Professional Proficiency' },
                  { lang: 'Telugu', level: 'Basic Understanding' }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{item.lang}</div>
                    <div className="text-sm text-gray-600">{item.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 fade-in-section">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
      <p className="text-xl text-gray-600">My Career Journey</p>
    </div>

    <div className="space-y-6">
      {[
        {
          title: 'Data Analyst Intern (Full-Time)',
          company: 'SIRPI Products and Services Pvt. Ltd.',
          location: 'Bengaluru',
          period: 'October 2025',
          icon: <Database className="w-6 h-6" />,
          achievements: [
            'Developed AI-driven workflows and automated reporting systems to generate operational performance insights',
            'Built dashboards to track partner and operational metrics supporting data-driven decision-making',
            'Performed data preparation, transformation, and analysis to generate actionable business insights',
            'Collaborated with cross-functional teams to analyze business requirements and improve account performance'
          ],
          tags: ['Data Analysis', 'AI Automation', 'n8n', 'Power BI', 'SQL'],
          certificate: 'SIRPI Internship Completion Letter (Nov 18, 2025)'
        },
        {
          title: 'Research Intern',
          company: 'University of Hohenheim / Eberhard Karls University',
          location: 'Tübingen, Germany',
          period: 'March 2023 – June 2023',
          icon: <Globe className="w-6 h-6" />,
          achievements: [
            'Assisted researchers in black carbon analysis, biochar production, and zymography experiments',
            'Gained hands-on experience with analytical instruments including gas chromatography and IRMS',
            'Studied soil biology and plant–microbe interactions related to nutrient cycling and crop productivity',
            'Developed exposure to international research environments and laboratory practices'
          ],
          tags: ['Research', 'Laboratory', 'International', 'Analytics'],
          image: 'images/Inayath_Ebehard_Karls_University.jpg'
        },
        {
          title: 'Post Harvest and Packaging Management Intern',
          company: 'H R Flowers',
          location: 'Karnataka, India',
          period: 'July 2022 - August 2022',
          icon: <TrendingUp className="w-6 h-6" />,
          achievements: [
            'Analyzed supply chain costs and identified inefficiencies in floriculture logistics',
            'Conducted cost-benefit analysis for packaging, grading, and transportation processes',
            'Evaluated post-harvest loss factors impacting revenue and market readiness'
          ],
          tags: ['Supply Chain', 'Cost Analysis', 'Operations']
        },
        {
          title: 'Nursery Management and Sales Management Trainee',
          company: 'Indo American Nursery (Startup)',
          location: 'Karnataka, India',
          period: 'August 2022 - September 2022',
          icon: <Briefcase className="w-6 h-6" />,
          achievements: [
            'Supported sales distribution planning and evaluated cost structures to assess profitability',
            'Conducted pricing and margin analysis across product categories to support competitive pricing',
            'Performed market research and feasibility analysis to identify demand trends'
          ],
          tags: ['Startup', 'Sales', 'Market Research']
        }
      ].map((job, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 fade-in-section overflow-hidden border border-gray-100"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] rounded-lg text-white flex-shrink-0">
                {job.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                <p className="text-[#2D5A3D] font-semibold">{job.company}</p>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-sm font-medium text-gray-500 flex items-center justify-end gap-1">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className="text-sm text-gray-400">{job.period}</span>
            </div>
          </div>

          {/* Mobile location/period */}
          <div className="flex gap-3 px-6 pt-4 sm:hidden">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {job.location}
            </span>
            <span className="text-sm text-gray-400">{job.period}</span>
          </div>

          {/* Image */}
          {job.image && (
            <div className="px-6 pt-4">
              <div className="rounded-lg overflow-hidden">
                <img src={job.image} alt={job.title} className="w-full h-64 object-cover" />
              </div>
            </div>
          )}

          {/* Achievements */}
          <div className="px-6 py-4">
            <ul className="space-y-2">
              {job.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: Tags + Certificate */}
          <div className="px-6 pb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            {job.certificate && (
              <span className="text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                🏅 {job.certificate}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Real-World Solutions & Research</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI-Powered Academic Assistance Platform',
                category: 'AI, Web Development',
                link: 'https://academicassistance.slicearrow.com',
                tags: ['AI Tools', 'n8n', 'Web App', 'Live'],
                description: 'Developed an AI-powered platform generating personalized learning support and educational resources for students.',
                features: [
                  'AI-driven content generation for academic support',
                  'Personalized learning resource recommendations',
                  'Automated workflow using n8n',
                  'Responsive web interface'
                ]
              },
              {
                title: 'AI-Based Recipe Generator (Cook Help)',
                category: 'AI, Food Tech',
                link: 'https://mhinu.github.io/reciepe-generator',
                tags: ['AI', 'Food Industry', 'Live'],
                description: 'Built a dynamic recipe generation web application using AI tools to help food enthusiasts and working professionals.',
                features: [
                  'AI-powered recipe generation',
                  'Dynamic content creation',
                  'Personalized recommendations',
                  'Intuitive UI/UX'
                ]
              },
              {
                title: 'Green Finance and Fintech for MSMEs',
                category: 'Sustainability, Finance',
                tags: ['Research', 'Finance', 'Sustainability'],
                description: 'Analyzed green finance instruments and fintech technologies driving sustainable MSME development in India.',
                features: [
                  'Analyzed green finance instruments (bonds, carbon credits)',
                  'Evaluated fintech technologies (AI, blockchain)',
                  'Studied government schemes',
                  'Identified sustainable financing pathways'
                ]
              },
              {
                title: 'Decision Intelligence Framework',
                category: 'Finance, ML',
                tags: ['Finance', 'ML', 'Automation'],
                description: 'Developed a decision intelligence framework integrating financial models, ML concepts, and automation.',
                features: [
                  'Integrated financial models (CAPM, Markowitz, VaR)',
                  'Applied ML concepts for predictions',
                  'Analyzed market volatility',
                  'Investment decision support system'
                ]
              },
              {
                title: 'AI Agentic Workflow for Data Stories',
                category: 'AI Automation',
                tags: ['n8n', 'AI', 'SIRPI'],
                description: 'Built an AI agentic workflow system for automated data stories generation during SIRPI internship.',
                features: [
                  'Automated data collection and processing',
                  'AI-powered insights generation',
                  'Real-time performance monitoring',
                  'System integration'
                ]
              },
              {
                title: 'Startup Ideas Development Suggestion Workflow',
                category: 'Entrepreneurship',
                tags: ['Innovation', 'Business'],
                description: 'Developed startup ideas solving problems for working professionals and food enthusiasts.',
                features: [
                  'Problem identification',
                  'Solution design',
                  'Technology integration',
                  'Market validation'
                ]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-section"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#2D5A3D] text-white rounded-lg hover:bg-[#234A31] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <ul className="space-y-2 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements & Activities</h2>
            <p className="text-xl text-gray-600">Recognition & Impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-in-section">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-[#F59E0B]" />
                Competition Wins
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Winner - Managerial Dilemma (2026)',
                    org: 'Presidency University, Bengaluru',
                    desc: 'Demonstrated strategic decision-making and collaborative problem-solving in complex business scenarios'
                  },
                  {
                    title: 'Participant - The Negotiator (Jan 2026)',
                    org: 'CHRIST University, Bengaluru',
                    desc: 'Strengthened persuasion and strategic communication skills in competitive business negotiation'
                  },
                  {
                    title: 'Participant - Business Analytics Event',
                    org: 'SDMIM, Mysore',
                    desc: 'Applied analytical thinking and data interpretation skills in competitive environment'
                  }
                ].map((achievement, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-[#F59E0B]">
                    <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{achievement.org}</p>
                    <p className="text-sm text-gray-700">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in-section">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2 text-[#2D5A3D]" />
                Leadership & Community Impact
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Organizer - Local Farmer Interaction Programs',
                    desc: 'Addressed field-level challenges and facilitated practical, on-ground solutions'
                  },
                  {
                    title: 'Club Leader - Social Media Club',
                    desc: 'Leading digital engagement initiatives and content strategy for MBA program'
                  },
                  {
                    title: 'Village Leader - RHWE Program (2023)',
                    desc: 'Three-month village stay gaining hands-on agriculture and horticulture exposure'
                  },
                  {
                    title: 'NSS Volunteer',
                    desc: 'Active participation in National Service Scheme activities for social welfare'
                  }
                ].map((activity, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-[#2D5A3D]">
                    <h4 className="font-semibold text-gray-900 mb-2">{activity.title}</h4>
                    <p className="text-sm text-gray-700">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
            {[
              { icon: '🌾', title: 'HEL - Horticultural Experiential Learning (2023)', desc: 'Trained in nursery management, budding, and grafting techniques' },
              { icon: '🎯', title: 'College Representative - Throwball', desc: 'Demonstrated teamwork and sportsmanship at inter-college level' },
              { icon: '🎭', title: 'First Place - District Drama Competition', desc: 'Recognized for performance and stage presentation' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 fade-in-section">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
      <p className="text-xl text-gray-600">Academic Foundation</p>
    </div>

    <div className="space-y-6">
      {[
        {
          degree: 'Master of Business Administration (MBA)',
          specialization: 'Specialization: Finance & Business Analytics',
          institution: 'KVAFSU University | Food Business',
          period: 'November 2024 - Present | Karnataka, India',
          accent: '#2563EB',
          bg: 'bg-blue-50',
          tagLabel: 'Relevant Coursework:',
          courses: ['Financial Management', 'Business Analytics', 'Food Industry Management', 'Marketing', 'Operations Research', 'Strategic Management']
        },
        {
          degree: 'Bachelor of Science (Hons) - Horticulture',
          specialization: 'College of Horticulture, Hiriyur',
          institution: 'KSNUAHS Shivamogga',
          period: 'August 2019 - June 2023 | Karnataka, India',
          accent: '#2D5A3D',
          bg: 'bg-green-50',
          tagLabel: 'Key Learnings:',
          courses: ['Crop Production', 'Post-Harvest Technology', 'Plant Breeding', 'Soil Science', 'Agricultural Economics', 'Supply Chain']
        }
      ].map((edu, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-section border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center space-x-4 p-6 border-b border-gray-100">
            <div
              className="p-3 rounded-lg text-white flex-shrink-0"
              style={{ background: `linear-gradient(to right, #2D5A3D, ${edu.accent})` }}
            >
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
              <p className="font-semibold" style={{ color: edu.accent }}>{edu.specialization}</p>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-4">
            <p className="text-gray-600 mb-1">{edu.institution}</p>
            <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
            <div className={`${edu.bg} p-3 rounded-lg`}>
              <p className="text-sm text-gray-700 font-semibold mb-2">{edu.tagLabel}</p>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <span key={i} className="text-xs bg-white px-2 py-1 rounded shadow-sm text-gray-700">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="certifications" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16 fade-in-section">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
      <p className="text-xl text-gray-600">Professional Development</p>
    </div>

    <div className="space-y-6">
      {[
        {
          title: 'Code2Cognition - AI and Data Science Bootcamp',
          org: 'Redseer Foundation & SIRPI | KVAFSU',
          date: 'May 7 - September 11, 2025',
          image: `${import.meta.env.BASE_URL}images/Code2Cognition_Certificate.jpeg`,
          tags: ['AI', 'ML', 'Data Science']
        },
        {
          title: 'From Excel to Power BI',
          org: 'Knowledge Accelerators via Coursera',
          date: 'December 11, 2024',
          verify: 'https://coursera.org/verify/E0DW75DKYMFZ',
          image: `${import.meta.env.BASE_URL}images/from_excel_to_power_BI_Cerificate.jpeg`,
          tags: ['Power BI', 'Data Visualization']
        },
        {
          title: 'Introduction to Statistics',
          org: 'Stanford University via Coursera',
          date: 'March 17, 2025',
          verify: 'https://coursera.org/verify/T52PE9RFYJ2S',
          image: `${import.meta.env.BASE_URL}images/Introduction_to_Statistics_Certificate.jpeg`,
          tags: ['Statistics', 'Data Science']
        },
        {
          title: 'Getting Started with Microsoft Excel',
          org: 'Coursera',
          date: 'April 23, 2025',
          verify: 'https://coursera.org/verify/2RJ0P4K98Q09T',
          image: `${import.meta.env.BASE_URL}images/Getting_Started_with_Excel_Certificate.jpeg`,
          tags: ['Excel', 'Data Analysis']
        }
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-section border border-gray-100 overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-[#F59E0B] to-[#EF4444] rounded-lg text-white flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{cert.title}</h4>
                <p className="text-[#F59E0B] font-semibold">{cert.org}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 hidden sm:block flex-shrink-0 ml-4">{cert.date}</p>
          </div>

          <div className="flex items-center gap-6 px-6 py-4">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-3 sm:hidden">{cert.date}</p>
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#2563EB] hover:underline mb-4"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Verify Certificate
                </a>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {cert.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {cert.image && (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-64 h-40 rounded-lg object-cover flex-shrink-0 shadow-sm"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="contact" className="py-20 bg-gradient-to-br from-[#2D5A3D] to-[#2563EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100">Open to Opportunities in Business Analysis, Consulting, Business Partnership management and Development & Data-Driven Roles</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in-section">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8">
                <p className="text-lg mb-6">
                  I'm actively seeking opportunities in <strong>Business Analysis, Data Analytics, Consulting,
                  Finance, Account Management, and Operations</strong> across diverse industries.
                </p>
                <p className="mb-8">
                  Whether you have a question, want to discuss a project, or just want to connect over the latest
                  in business analytics and AI innovations, I'd love to hear from you!
                </p>

                <div className="space-y-4 mb-8">
                  <a href="mailto:inayath0401@gmail.com" className="flex items-center space-x-3 hover:text-blue-200 transition-colors">
                    <Mail className="w-6 h-6" />
                    <span>inayath0401@gmail.com</span>
                  </a>
                  <a href="tel:+918660356695" className="flex items-center space-x-3 hover:text-blue-200 transition-colors">
                    <Phone className="w-6 h-6" />
                    <span>+91 86603 56695</span>
                  </a>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <span>Karnataka, India</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Available for Full-Time Roles
                  </span>
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                   Ready to Contribute my Skills
                  </span>
                  <span className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-semibold flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Willing to Relocate
                  </span>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/inayath-m-h-451845245/"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/mhinu"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:inayath0401@gmail.com"
                    className="p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="fade-in-section">
  <form ref={form} onSubmit={sendEmail} className="bg-white rounded-xl p-8 shadow-xl">

    {/* Name */}
    <div className="mb-6">
      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
        Name *
      </label>
      <input
        type="text"
        id="name"
        name="user_name"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent text-gray-900"
        placeholder="Your Name"
      />
    </div>

    {/* Email */}
    <div className="mb-6">
      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
        Email *
      </label>
      <input
        type="email"
        id="email"
        name="user_email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent text-gray-900"
        placeholder="your.email@example.com"
      />
    </div>

    {/* Subject */}
    <div className="mb-6">
      <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
        Subject *
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent text-gray-900"
        placeholder="What's this about?"
      />
    </div>

    {/* Message */}
    <div className="mb-6">
      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
        Message *
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent text-gray-900"
        placeholder="Your message..."
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full px-6 py-4 bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
    >
      Send Message
    </button>

 </form>
</div>   {/* right column */}
</div>   {/* grid */}
</div>   {/* container */}
</section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] bg-clip-text text-transparent mb-4">
                Inayath M H
              </h3>
              <p className="text-gray-400 mb-4">
                Enthusiastic to apply my skills
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:inayath0401@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Karnataka, India</p>
                <p>inayath0401@gmail.com</p>
                <p>+91 86603 56695</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Inayath M H. All rights reserved.</p>
            <p className="text-sm mt-2">Built with AI agent</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#2D5A3D] to-[#2563EB] text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;
