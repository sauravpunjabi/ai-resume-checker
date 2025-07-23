import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "contants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NailTheCV" },
    { name: "description", content: "Welcome to NailTheCV!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />


      <section className="main-section">
        <div className="page-heading">
          <h1>Track your applications and resume ratings</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <div className="resume-section">
              {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
      </div>
      )}
      

      
  </main>
}
