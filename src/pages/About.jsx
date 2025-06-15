import { skills } from "../constants";
import { experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from '../components/CTA';

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Sanjith
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Front-End Developer based in Colombo, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked as a Freelancer, leveling up my skills and teaming up with smart people. Here's the random:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement key={index}
              date={experience.timeline}
              iconStyle={{background:experience.iconBg}}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                    src={experience.icon}
                    alt={experience.client}
                    className="w-[60%] h-[60%] object-contain"
                    ></img>

                </div>
              }
              contentStyle={{
                borderBottom:"8px",
                borderStyles:"solid",
                borderBottomColor:experience.iconBg,
                boxShadow:"none",
              }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                  <p className="text-black-500 font-medium text-base"
                  style={{margin:0 }}
                  >{experience.client}</p>
                </div>

                <ul className="my-5 list-disc list-inside ml-5 space-y-2">
                  {experience.points.map((point, i) => (
                    <li key={i} className="text-black-500/50 font-normal pl-1 text-sm">{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200"/>

      <CTA />
    </section>
  );
}
