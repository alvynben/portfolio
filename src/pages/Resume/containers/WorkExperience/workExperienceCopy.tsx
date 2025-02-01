import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faGraduationCap, faIdBadge, faLeaf, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

export interface WorkExperienceElementProps {
    date: string; // Include 'Present' if still working.
    icon: IconDefinition;
    title: string;
    company: string;
    location: string;
    skills?: string[];
    points: ReactElement[];
}

export const workExperienceCopy: WorkExperienceElementProps[] = [
    {
        date: "Jun 2024 - Present",
        icon: faTiktok,
        title: "Software Engineer",
        company: "Tiktok",
        location: "Singapore",
        skills: ["React", "Typescript", "Golang"],
        points: [
            <>
                Building features for TikTok Shop Homepage to improve GMV
                <strong>
                    {" "}at rates of 5 - 10% per feature.{" "}
                </strong>
            </>,
            <>
                Maintaining Backend For Frontend (BFF) Framework{" "}
                <strong>
                    to reduce FE work required for code changes.{" "}
                </strong>
                {" "}
            </>
        ]
    },
    {
        date: "Jan 2023 - Dec 2023",
        icon: faCreditCard,
        title: "Software Engineer Intern",
        company: "Unit21",
        location: "San Francisco",
        skills: ["React", "Typescript", "Python"],
        points: [
            <>
                Built SOC2 compliant frontend and backend features for financial compliance management tools processing upwards of
                <strong>
                    &gt;1B transactions per call.{" "}
                </strong>
            </>,
            <>
                Integrated{" "}
                <strong>
                    OpenAI LLM functionality securely{" "}
                </strong>
                to enable customers to identify patterns and make Matplotlib graphs out of data shared with Unit21.{" "}
            </>
        ]
    },
    {
        date: "May 2022 - Nov 2022",
        icon: faTiktok,
        title: "Software Engineer Intern",
        company: "TikTok",
        location: "Singapore",
        skills: ["React", "Typescript", "Python"],
        points: [
            <>
                Planned and constructed efficient and highly reusable
                front-end systems driving complex web applications for
                e-commerce products,{" "}
                <strong>
                    increasing unique views by 110% and retention rate by 24%.
                </strong>
            </>,
            <>
                Collaborated with product design, product management and
                software engineering teams to deliver more than{" "}
                <strong>
                    3 large-scale features across more than 5 countries over 3
                    months.
                </strong>
            </>
        ]
    },
    {
        date: "Jul 2021 - Jul 2022",
        icon: faLeaf,
        title: "Full Stack Developer",
        company: "Interseed Co",
        location: "Singapore",
        skills: ["React", "Typescript", "NodeJS"],
        points: [
            <>
                Accomplished mobile responsiveness for Interseed's Social Networking application (app.interseed.co) to{" "}
                <strong>
                    increase percentage of mobile users from 20% to 74%
                </strong>{" "}
                of current user base.
            </>,
            <>
                Collaborated with development team to{" "}
                <strong>
                    design features for initial launch over 5 weeks
                </strong>
                , and collected user feedback to perform bug fixes with React, Typescript, and Bootstrap.
            </>,
            <>
                <strong>Created new REST API endpoint</strong> in NodeJS server with ExpressJS, by interfacing with MongoDB database to group more than 200 website users by location for display on a dynamic map, created using React Leaflet.
            </>,
            <>
                <strong>Championed product management methodologies</strong>{" "}
                (user personas, brainstorming) to develop product features to specifically assist main customer base over 2-week timeline
            </>
        ]
    },
    {
        date: "Aug 2021 - Dec 2021",
        icon: faGraduationCap,
        title: "Teaching Assistant",
        company: "National University of Singapore",
        location: "Singapore",
        skills: ["Python", "OOP"],
        points: [
            <>
                <strong>Taught</strong> and graded a batch of 22 students about fundamental programming concepts leveraging{" "}
                <strong>Python and Object-Oriented Programming.</strong>
            </>,
            <>
                <strong>Received 4.3/5</strong> and above on all metrics from student feedback.
            </>
        ]
    },
    {
        date: "Aug 2020 - Aug 2021",
        icon: faGraduationCap,
        title: "Software Vice President",
        company: "NUS RoboMasters",
        location: "Singapore",
        skills: ["Python", "C++", "ROS"],
        points: [
            <>
                Researched different development kits and cameras such as the NVIDIA NX & Raspberry Pi Cam to{" "}
                <strong>design an embedded system for target detection and aiming.</strong>
            </>,
            <>
                Spearheaded computer vision team to{" "}
                <strong>
                    implement Yolov5 on PyTorch and Yolov4 on TensorRT along with Robotic Operating System (ROS) 2
                </strong>{" "}
                to do target detection of a custom dataset.
            </>,
            <>
                <strong>Integrated CSI camera with Jetson Xavier NX</strong> with Ubuntu 18.04 to fix pre-existing robot hardware.
            </>,
            <>
                <strong>Created a custom PyTorch model</strong> from self-annotated database to track and aim at targets with less than 20ms latency.
            </>
        ]
    },
    {
        date: "Feb 2018 - Jun 2020",
        icon: faIdBadge,
        title: "2nd Sergeant (Infantry Specialist)",
        company: "Singapore Armed Forces",
        location: "Singapore",
        points: [
          <>
            Devised and organized a database system to monitor and update lesson plans from multiple units,{" "}
            <strong>cutting down delivery time</strong> for an updated hardcopy lesson plan{" "}
            <strong>from 3 days to less than a day.</strong>
          </>,
          <>
            Picked to be emcee for unit anniversary event, and{" "}
            <strong>self-developed script to present a show for more than 500 pax.</strong>
          </>,
          <>
            Awarded <strong>Best Commander</strong> during service from unit commander and awarded{" "}
            <strong>Outstanding conduct</strong> upon release from service.
          </>
        ]
      }
];