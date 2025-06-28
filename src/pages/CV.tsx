
import Header from "@/components/Header";
import { useCVData } from "@/hooks/useCVData";

const CV = () => {
  const { data: cvData, isLoading, error } = useCVData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center">
            <div className="text-lg text-gray-600">Loading CV...</div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !cvData) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center">
            <div className="text-lg text-red-600">Failed to load CV data</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {cvData.personal.description}
          </p>
        </div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div>
              <p className="mb-2"><strong>Email:</strong> {cvData.contact.email}</p>
              <p className="mb-2"><strong>Phone:</strong> {cvData.contact.phone}</p>
            </div>
            <div>
              <p className="mb-2"><strong>LinkedIn:</strong> {cvData.contact.linkedin}</p>
              <p className="mb-2"><strong>GitHub:</strong> {cvData.contact.github}</p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-800 leading-relaxed">
            {cvData.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {cvData.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-black">{job.title}</h3>
                  <span className="text-gray-600 font-medium">{job.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-3">{job.company} • {job.location}</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
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
                {cvData.skills.frontend.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.backend.map((skill) => (
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
          
          {cvData.education.map((edu, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-black">{edu.degree}</h3>
                <span className="text-gray-600 font-medium">{edu.period}</span>
              </div>
              <p className="text-gray-700 font-medium mb-3">{edu.school}</p>
              <p className="text-gray-800">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Notable Projects
          </h2>
          
          <div className="space-y-6">
            {cvData.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-800 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-black text-white px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 border-b border-gray-200 pb-2">
            Certifications & Achievements
          </h2>
          
          <ul className="space-y-2 text-gray-800">
            {cvData.certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="text-black font-medium mr-2">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CV;
