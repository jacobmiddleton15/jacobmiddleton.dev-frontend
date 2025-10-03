import { Download } from "lucide-react";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-gray-900 dark:text-gray-900">

      {/* About Me */}
      <section>
        <p>
          I am a senior full-stack software developer with over six years of experience building 
          and modernizing enterprise applications. I specialize in delivering secure, scalable solutions 
          across .NET, web, mobile, and data platforms, with a strong focus on problem-solving, 
          system design, user experience design, and driving measurable business impact.
        </p>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p className="font-semibold">
          Texas A&amp;M University – College Station, Texas (2015 – 2019)
        </p>
        <p>Bachelor of Science in Computer Science with minor in Business</p>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Languages &amp; Programming</h3>
            <p>
              C#, VB.NET, Java, JavaScript, TypeScript, SQL, SQLite, PostgreSQL,
              C++, C, Python, Swift, Objective-C
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Frameworks &amp; Development</h3>
            <p>
              React, Next.js, NestJS, Bootstrap, WinForms, Android XML Layouts,
              HTML, CSS, .NET Framework 4.0 – 4.8, ASP.NET, Node.js, Gradle
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Data Access</h3>
            <p>ADO.NET, Entity Framework</p>
          </div>

          <div>
            <h3 className="font-semibold">Reporting &amp; Analytics</h3>
            <p>SAP Crystal Reports, SQL Server Reporting Services</p>
          </div>

          <div>
            <h3 className="font-semibold">Tools &amp; Platforms</h3>
            <p>
              Git, Team Foundation Server, Subversion, Jira, Salesforce,
              ConnectWise, IIS, Vercel
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div>
          <p className="font-semibold">
            Alliant Systems – Irving, Texas (May 2019 – October 2025)
          </p>
          <p className="italic">Full Stack Software Developer</p>

          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Designed, developed, and maintained enterprise business solutions for 200+ plants
            </li>
            <li>
              <span className="font-semibold">Enterprise Applications (Windows):</span>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Branch and route management</li>
                <li>Account and customer management</li>
                <li>SKU and item management</li>
                <li>Service ticket management</li>
                <li>Invoicing &amp; A/R</li>
                <li>Reporting</li>
                <li>Background services</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Mobile &amp; Cloud Development:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Android app for en-route invoicing and servicing</li>
                <li>Cloud services for syncing mobile data with enterprise servers</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Web Applications:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Customer portal for invoicing, payments, service requests, and reporting</li>
                <li>Client-facing service ticketing app</li>
                <li>API web services</li>
                <li>Internal utilities for client integrations</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Leadership &amp; Product Ownership:</span>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Led development teams across multiple projects</li>
                <li>
                  Owned product development for:
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>International payment processing integrations</li>
                    <li>Android application</li>
                    <li>Customer portal web app</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Download button */}
      <section className="text-center mt-12">
        <a
            href="/Middleton_Jacob_CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded hover:bg-orange-900 hover:text-white transition"
        >
            <Download className="w-5 h-5" />
            Download CV (PDF)
        </a>
      </section>

    </main>
  );
}