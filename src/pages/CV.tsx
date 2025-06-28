
import Header from "@/components/Header";

const CV = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Software Engineer with expertise in building scalable web applications
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div>
              <p className="mb-2"><strong>Email:</strong> your.email@example.com</p>
              <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
            <div>
              <p className="mb-2"><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</p>
              <p className="mb-2"><strong>GitHub:</strong> github.com/yourusername</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Experienced software engineer with 5+ years of experience building modern web applications. 
            Passionate about clean code, system architecture, and delivering exceptional user experiences. 
            Strong background in React, TypeScript, and full-stack development with a focus on scalability 
            and maintainability.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-black">Senior Software Engineer</h3>
                <span className="text-gray-600 font-medium">2022 - Present</span>
              </div>
              <p className="text-gray-700 font-medium mb-3">Tech Company Inc. • Remote</p>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Led development of customer-facing web applications serving 100k+ users</li>
                <li>Architected and implemented microservices using Node.js and TypeScript</li>
                <li>Mentored junior developers and established code review processes</li>
                <li>Improved application performance by 40% through optimization initiatives</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-black">Software Engineer</h3>
                <span className="text-gray-600 font-medium">2020 - 2022</span>
              </div>
              <p className="text-gray-700 font-medium mb-3">StartupXYZ • San Francisco, CA</p>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Built responsive web applications using React and modern JavaScript</li>
                <li>Collaborated with design team to implement pixel-perfect UI components</li>
                <li>Integrated third-party APIs and payment processing systems</li>
                <li>Participated in agile development processes and sprint planning</li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-black">Junior Developer</h3>
                <span className="text-gray-600 font-medium">2019 - 2020</span>
              </div>
              <p className="text-gray-700 font-medium mb-3">Development Agency • New York, NY</p>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                <li>Assisted in database design and backend API development</li>
                <li>Participated in client meetings and requirement gathering sessions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'REST APIs'].map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Education
          </h2>
          
          <div className="border-l-2 border-gray-200 pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold text-black">Bachelor of Science in Computer Science</h3>
              <span className="text-gray-600 font-medium">2015 - 2019</span>
            </div>
            <p className="text-gray-700 font-medium mb-3">University of Technology</p>
            <p className="text-gray-800">
              Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, 
              Web Development, Computer Networks
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Notable Projects
          </h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-2">E-commerce Platform</h3>
              <p className="text-gray-800 mb-3">
                Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. 
                Features include user authentication, payment processing, inventory management, 
                and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'Stripe API'].map((tech) => (
                  <span key={tech} className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-2">Task Management App</h3>
              <p className="text-gray-800 mb-3">
                Collaborative task management application with real-time updates, 
                drag-and-drop functionality, and team collaboration features.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'WebSocket', 'MongoDB'].map((tech) => (
                  <span key={tech} className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Certifications & Achievements
          </h2>
          
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-black font-medium mr-2">•</span>
              AWS Certified Developer Associate (2023)
            </li>
            <li className="flex items-start">
              <span className="text-black font-medium mr-2">•</span>
              Google Analytics Certified (2022)
            </li>
            <li className="flex items-start">
              <span className="text-black font-medium mr-2">•</span>
              Winner - Company Hackathon 2023
            </li>
            <li className="flex items-start">
              <span className="text-black font-medium mr-2">•</span>
              Speaker at Tech Conference 2022: "Building Scalable React Applications"
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CV;
