import React from "react";
import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { TbUserStar } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCodesandboxLogoFill } from "react-icons/pi";

function CardShell({ gradient, children }) {
  return (
    <div
      className="rounded-xl p-[1px] w-full h-full"
      style={{ background: gradient }}
    >
      <div className="rounded-xl bg-black/80 backdrop-blur h-full">
        <div className="flex flex-col w-full px-5 sm:px-8 py-8 md:py-10 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function JobEntry({ logo, company, role, date, location, points }) {
  return (
    <div>
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={company}
          className="w-11 h-11 md:w-14 md:h-14 rounded-lg object-contain p-1 shrink-0 bg-black ring-1 ring-white/10"
        />
        <div className="w-full min-w-0">
          <h3 className="text-base md:text-xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-snug">
            {company}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-1">
            <span className="font-semibold text-gray-200">{role}</span>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs md:text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <LuCalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
              {date}
            </span>
            {location && (
              <span className="flex items-center gap-1.5">
                <LuMapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
                {location}
              </span>
            )}
          </div>
        </div>
      </div>

      {points?.length > 0 && (
        <div className="mt-4 md:mt-5">
          <h4 className="text-xs md:text-sm uppercase tracking-wide text-orange-300 flex gap-2 items-center font-semibold mb-3">
            <TbUserStar className="w-4 h-4 shrink-0" />
            Work Responsibilities
          </h4>
          <ul className="space-y-2.5">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex gap-2.5 text-sm leading-relaxed text-gray-400"
              >
                <GoDotFill className="w-3.5 h-3.5 mt-1.5 shrink-0 text-gray-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function EduEntry({ logo, school, degree, location, date, description }) {
  return (
    <div>
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={school}
          className="w-11 h-11 md:w-14 md:h-14 rounded-lg object-cover shrink-0 bg-white p-1.5 ring-1 ring-white/10"
        />
        <div className="w-full min-w-0">
          <h3 className="text-base md:text-xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-snug">
            {school}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-1">{degree}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs md:text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <LuMapPin className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <LuCalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
              {date}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-5">
        <h4 className="text-xs md:text-sm uppercase tracking-wide text-orange-300 flex gap-2 items-center font-semibold mb-3">
          <PiCodesandboxLogoFill className="w-4 h-4 shrink-0" />
          Course Description
        </h4>
        <p className="flex gap-2.5 text-sm leading-relaxed text-gray-400">
          <GoDotFill className="w-3.5 h-3.5 mt-1.5 shrink-0 text-gray-500" />
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
}

function Experience() {
  const featuredJob = {
    logo: "/promomaster_logo.png",
    company: "PromoMaster OneStop Corporate Solutions Ltd",
    role: "Full Stack Developer",
    date: "Jan 2026 - Present",
    location: "Mississauga, Ontario, Canada · On-site",
    points: [
      "Engineered a custom analytics and event-monitoring plugin tracking user behavior across 250+ product pages, capturing drop-off points, field-level interactions, timestamps, IP addresses, geolocation, and session activity to identify conversion bottlenecks and reduce abandonment.",
      "Developed workflow automation solutions that streamlined business processes, reduced manual administrative workload by 30%, improved data accuracy, and accelerated operational efficiency.",
      "Wrote custom PHP functions and hooks to extend core functionality, enabling tailored business logic without relying on bloated third-party plugins.",
      "Extended Gravity Forms with custom PHP hooks and JavaScript, enabling conditional logic, dynamic field population, and multi-step form flows across 400+ forms.",
      "Managed 12+ enterprise WordPress websites, delivering custom plugins, feature enhancements, server maintenance, security updates, and performance optimizations that reduced maintenance effort.",
      "Enhanced technical SEO across 12+ enterprise WordPress websites by resolving crawlability, indexing, structured data, Core Web Vitals, and performance issues, increasing organic search visibility.",
      "Optimized high-traffic server configurations and backend workflows across core infrastructure, eliminating deployment bottlenecks and ensuring stable 99.9% production uptime across environments.",
      "Built a custom headless-ready plugin integrating Gravity Forms API components and AJAX handlers, eliminating legacy technical debt and powering 400+ forms with seamless, state-managed user experiences.",
      "Collaborated with SEO and PPC teams to implement technical enhancements, improving crawlability, conversion tracking, and site performance.",
      "Implemented structured logging and error monitoring across enterprise web applications, accelerating debugging and reducing issue resolution time.",
    ],
  };

  const jobs = [
    {
      logo: "/bestbrains.png",
      company: "BestBrains",
      role: "Coding Instructor",
      date: "Sep 2025 - Present",
      location: "",
      points: [
        "Delivered coding lessons in Scratch, Python, and JavaScript, boosting average student project completion rates.",
        "Designed structured learning modules that improved knowledge retention scores by 30% in weekly assessments.",
        "Introduced hands-on challenges and projects, increasing student engagement and practical skill application.",
        "Led debugging and troubleshooting workshops, reducing coding errors and improving student confidence.",
        "Delivered lessons in Python, JavaScript, and Scratch fostering creativity and enhancing student success rates.",
        "Developed comprehensive modules that enhanced concept understanding and boosted assessment scores.",
        "Provided personalized mentorship, helping underperforming students achieve grades within two months.",
      ],
    },
    {
      logo: "/stem_canada.png",
      company: "STEM Montessori Academy of Canada",
      role: "Full Stack Developer (Co-op)",
      date: "Jan 2025 - Apr 2025",
      location: "",
      points: [
        "Led a team of 5 developers, coordinating tasks and ensuring efficient delivery, improving team performance.",
        "Built and customized WordPress CMS themes, enhancing flexibility and reducing content update time by 50%.",
        "Streamlined the application theme using modern tools and workflows, enhancing scalability and deployment by 50%.",
        "Ensured accessibility compliance using WCAG 2.2 standards, enabling inclusive design and accelerating deployment.",
        "Developed and seamlessly integrated automated unit tests across critical modules, cutting production defects by 20%.",
        "Integrated secure third-party APIs, enhancing user experience by 25% and ensuring seamless data synchronization.",
        "Refactored backend logic and optimized server architecture for database-heavy routes, improving query performance, reducing response time by 40%, and maintaining uptime.",
        "Enhanced daily team communication and collaboration by leading thorough code reviews and coordinating consistent cross-functional meetings, resulting in a 10% drop in recurring QA issues.",
      ],
    },
  ];

  const education = [
    {
      logo: "/georgian.png",
      school: "Georgian College",
      degree: "Diploma in Computer Programming (2yr)",
      location: "Toronto, Ontario, Canada",
      date: "Jan 2024 - Aug 2025",
      description:
        "Gained hands-on experience in programming, web development, and building data-driven systems using languages like Java, C#, JavaScript, PHP, and Swift.",
    },
    {
      logo: "/gtu.png",
      school: "Gujarat Technological University",
      degree: "B.Tech in Computer Engineering (4yr)",
      location: "V.v Nagar, Gujarat, India",
      date: "Aug 2019 - May 2023",
      description:
        "Gained hands-on experience in programming, web development, and system design using Java, C++, C#, JavaScript, PHP. Also studied Android development, advanced databases, and network security.",
    },
  ];

  const experienceGradient =
    "linear-gradient(195deg, #ff00c3, #e11cbe, #c427b6, #a82dad, #8d2fa1, #732e93, #5b2c84, #452874, #312362, #1f1d50, #10163d, #050b2b)";
  const educationGradient =
    "linear-gradient(150deg, #f9f9f9, #e2e5e2, #cad1cd, #b3beb9, #9baba7, #859896, #6f8587, #5a737a, #46616d, #344f61, #233d56, #142b4e)";

  return (
    <section className="relative py-14 md:mt-0 mt-10 p-4 bg-gray-900 rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 blur-[118px] h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>

      <div className="relative max-w-screen-xl mx-auto text-gray-300">
        <div className="max-w-xl mx-auto space-y-2 px-4 sm:text-center sm:px-0">
          <h2 className="text-slate-50 text-center font-semibold md:text-4xl text-2xl">
            Education &amp; Experience
          </h2>
          <div className="w-full text-center md:mb-0 mb-5">
            <p>Know more about my professional background and education.</p>
          </div>
        </div>

        {/* ---- Experience ---- */}
        <div className="md:mt-10 mt-6 px-2 sm:px-6 lg:px-0">
          <h2 className="mb-4 text-lg text-orange-300 flex gap-2 items-center font-semibold">
            <MdWorkOutline className="w-5 h-5 shrink-0" />
            Professional Experience
          </h2>

          {/* Current role, full width */}
          <div className="mb-6">
            <CardShell gradient={experienceGradient}>
              <JobEntry {...featuredJob} />
            </CardShell>
          </div>

          {/* Previous roles, 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {jobs.map((job) => (
              <CardShell gradient={experienceGradient} key={job.company}>
                <JobEntry {...job} />
              </CardShell>
            ))}
          </div>
        </div>

        {/* ---- Education ---- */}
        <div className="mt-12 px-2 sm:px-6 lg:px-0">
          <h2 className="mb-4 text-lg text-orange-300 flex gap-2 items-center font-semibold">
            <FaGraduationCap className="w-5 h-5 shrink-0" />
            My Qualification
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {education.map((edu) => (
              <CardShell gradient={educationGradient} key={edu.school}>
                <EduEntry {...edu} />
              </CardShell>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
