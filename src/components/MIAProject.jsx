import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmergencyChatbotImage from "../assets/Emergency-moos.png";
import EmergencyCover from "../assets/emergency-cover.png";
import Brainstorming1 from "../assets/Assosiations.PNG";
import Brainstorming2 from "../assets/robin.PNG";
import TakeawaysImg from "../assets/emergency-code.png";
import ImpactImg from "../assets/Impact.jpg";
import { motion } from "framer-motion";

const caseStudySections = [
  {
    id: "overview",
    title: "Overview",
    description: (
      <>
        <Typography>
          This 4-week project focused on ideation and implementation. I contributed my own design idea and collaborated with three teammates. Together, we brainstormed multiple concepts and refined the most feasible solution: an AI-driven online emergency form.
        </Typography>
      </>
    ),
    image: EmergencyCover,
    imageAlt: "Emergency Cover",
    imageCaption: "Project cover illustrating the Emergency Chatbot concept."
  },
  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography>
          Emergency services often face high demand, causing delays in critical care. Our solution, a smart online form with an AI chatbot, helps patients quickly determine if they need emergency care or alternative treatment while sending essential medical information to hospitals in advance.
        </Typography>
        <Typography>
          By automating triage and guidance, the form reduces unnecessary ER visits, supports emergency personnel, and improves access for patients hesitant to call emergency services.
        </Typography>
      </>
    ),
    image: EmergencyChatbotImage,
    imageAlt: "Emergency Chatbot Context",
    imageCaption: "Illustration showing the context and workflow of the emergency chatbot."
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph>
          We explored multiple ideation methods, including analogies, assumptions, provocations, random entry, SCAMPER, and Round Robin to generate creative solutions for emergency care.
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Analogies
        </Typography>
        <Typography paragraph>
          We compared ER services to McDonald’s (fast, efficient service) and a kettle (timely, multipurpose functionality). These parallels inspired ideas for streamlining processes, improving responsiveness, and leveraging technology. Mood boards were used to visualize these concepts and spark further creative thinking.
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Assumptions & Insights
        </Typography>
        <Typography paragraph>
          Challenging assumptions revealed potential weaknesses, such as communication barriers for patients and overworked staff affecting care quality. This helped us identify areas where technology—like my AI chatbot concept—could support both patients and staff.
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Round Robin x SCAMPER
        </Typography>
        <Typography component="ul" paragraph>
          <li>
            <strong>Round 1:</strong> Initial solutions might fail due to unrealistic expectations (robots everywhere, AI errors, stress from tracking ambulances).
          </li>
          <li>
            <strong>Round 2:</strong> We considered patient autonomy over AI assistants and making solutions more data-driven. Some patients may prefer human help only.
          </li>
          <li>
            <strong>Round 3:</strong> Design criteria began overlapping with previous rounds; human supervision was deemed necessary due to potential AI biases.
          </li>
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Outcomes
        </Typography>
        <Typography paragraph>
          These methods led to diverse ideas, including more ER checkpoints, sectioned spaces for efficiency, and automated triage, directly informing the design of our AI-driven online emergency form.
        </Typography>
      </>
    ),
    images: [
      { src: Brainstorming1, alt: "Brainstorming Ideas 1", caption: "Initial idea sketches and analogies used in brainstorming." },
      { src: Brainstorming2, alt: "Brainstorming Ideas 2", caption: "Further brainstorming with Round Robin and SCAMPER methods." }
    ]
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph>
          When I started working on the prototype, my first focus was on experimenting with colors. In the first iteration, I chose green, because according to color theory it conveys calmness  -  something I felt was important in a hospital context. However, during the second iteration, I changed the color to red, as it is more strongly associated with hospitals and urgency. In the final iteration, I shifted to blue, as it conveys stability and peace, which better aligned with the feeling I wanted users to have.
        </Typography>
        <Typography paragraph>
          User testing played a crucial role in shaping the prototype further. Testers pointed out that some of the questions could either be skipped or made more efficient, which gave me direction on how to streamline the experience. Another interesting idea that emerged was the use of a chatbot. Inspired by Uber, the chatbot would not only provide real-time information about where the ambulance is, but also follow up with the user afterward to check if everything is okay. This small interaction creates a sense of empathy and care, while at the same time collecting feedback that can help the chatbot improve over time.
        </Typography>
      </>
    ),
    isPrototype: true
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          To evaluate the design, I conducted several types of user testing. One of the first steps was a SUS survey, where the Diagnosis Chatbot received a score of 77.8, indicating good usability. The next stage involved prototype testing with seven participants, three of whom were experts. I used the think-aloud method, which provided deep insights into the designs and opened new perspectives.
        </Typography>
        <Typography paragraph>
          Users not only identified issues but also proposed improvements-  for example, introducing more colors. Interestingly, feedback revealed conflicting expectations: some users valued quick responses, while others preferred detailed explanations of the AI’s decisions. For instance, the ER chatbot form was praised for being quick, smooth, and efficient. At the same time, participants suggested asking additional questions to gather more information for accurate results, and providing justifications for assigned severity levels. The most appreciated features were the body scan.
        </Typography>
        <Typography paragraph>
          The most significant refinements came after combining design testing with a literature review. Both confirmed that early detection of patient conditions before hospital arrival can significantly improve emergency response and treatment outcomes. Other factors, such as real-time patient data transmission, clarity of language (inclusive for different levels of digital literacy), and the amount of information presented, all played a role in usability. Achieving the right balance between providing guidance, supporting autonomy, and building trust in the AI system became a central design challenge.
        </Typography>
        <Typography paragraph>
          One of the key tensions we encountered was how to balance user control with the system’s ability to make accurate assessments and guide decisions. This conflict highlighted an area requiring further research and refinement. While not all design criteria were fully met, the testing phase offered rich qualitative insights from real users and helped us set clear priorities for the next iteration.
        </Typography>
      </>
    ),
    image: ImpactImg,
    imageAlt: "Impact & Results",
    imageCaption: "Visualization of the AI and Human interaction"
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph>
          This project highlighted the importance of balancing <b>efficiency and empathy</b> in emergency care design. 
          Users appreciated the quick and smooth experience of the ER chatbot form, but they also asked for reassurance, 
          explanations, and transparency. Finding the right balance between user autonomy and AI-driven guidance 
          emerged as a key design challenge.
        </Typography>
        <Typography paragraph>
          Another important lesson was the value of <b>iterative user testing</b>. Even small testing rounds revealed 
          unexpected gaps — such as the need to justify severity levels and adapt language for users with different 
          levels of digital literacy. Insights like the demand for body scans and video explanations pushed the 
          design toward greater inclusivity and trust.
        </Typography>
        <Typography paragraph>
          To take the idea further, I created a small <b>working chatbot prototype using LangChain</b>. This allowed me 
          to experiment with how conversational AI could deliver real-time guidance and to observe how users interacted 
          with an early functional version of the system. While limited in scope, it demonstrated the potential for 
          scaling more dynamic, data-driven emergency support.
        </Typography>
        <Typography paragraph>
          Looking ahead, the next steps would be expanding testing to a more diverse group of patients, collaborating 
          with healthcare professionals to validate accuracy, and exploring real-time data integration (e.g., wearables, 
          EHR systems). A refined LangChain-powered chatbot could also test how transparency and empathy can be scaled 
          in emergency contexts.
        </Typography>
        <Typography paragraph>
          Ultimately, this project reinforced my belief that <b>AI in healthcare must remain human-centered first</b>, 
          with usability, clarity, and trust at the core of every design decision.
        </Typography>
      </>
    ),
    image: TakeawaysImg,
    imageAlt: "Takeaways & Next Steps",
    imageCaption: "A codesnippet of the code I developed."
  }
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MIAProject= () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map((section) => {
        const el = document.getElementById(section.id);
        return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });
      const current = offsets.find((section) => section.offset >= 0) || offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 8 }}>
        MIA: Media Inovation Assistant
      </Typography>

      <Grid container spacing={6}>
        {/* Desktop sidebar */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ border: 1, borderColor: "divider", borderRadius: 2, p: 1, mb: 4 }}>
              <Typography variant="subtitle2" sx={{ px: 1, py: 1, fontWeight: 700 }}>Contents</Typography>
              <List dense>
                {caseStudySections.map((s) => (
                  <ListItemButton
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    selected={activeSection === s.id}
                  >
                    <ListItemText primary={s.title} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>

          {/* Mobile accordion */}
          <Box sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mb: 4,
            width: "100%",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            bgcolor: "background.paper",
            boxShadow: 2,
            py: 1
          }}>
            <Accordion sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: "center", width: "100%" }}>
                  Contents
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {caseStudySections.map((s) => (
                    <ListItemButton key={s.id} onClick={() => scrollToId(s.id)}>
                      <ListItemText primary={s.title} sx={{ textAlign: "center" }} />
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        {/* Main content */}
        <Grid item xs={12} md={8} lg={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={index}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Box sx={{ mb: 8, maxWidth: 800, width: "100%" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}>
                  {section.title}
                </Typography>
                <Box sx={{ color: "text.secondary", mb: 3 }}>{section.description}</Box>

                {/* Conditional Images / Prototype */}
                {section.isPrototype ? (
                  <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="100%"
                      height="450"
                      src="https://embed.figma.com/design/yCAgDP2YQZqYPyL9g2iPfr/Emergency-chatbot?node-id=0-1&embed-host=share"
                      allowFullScreen
                      title="Figma Prototype Emergency Chatbot"
                    ></iframe>
                  </Box>
                ) : section.images ? (
                  section.images.map((img, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Box component="img" src={img.src} alt={img.alt} sx={{ width: "100%", height: "auto", borderRadius: 2, mb: 1, boxShadow: 3 }} />
                      <Typography variant="caption" display="block" align="center" sx={{ mb: 2 }}>{img.caption}</Typography>
                    </Box>
                  ))
                ) : section.image ? (
                  <Box sx={{ mb: 2 }}>
                    <Box component="img" src={section.image} alt={section.imageAlt} sx={{ width: "100%", height: "auto", borderRadius: 2, mb: 1, boxShadow: 3 }} />
                    <Typography variant="caption" display="block" align="center">{section.imageCaption}</Typography>
                  </Box>
                ) : (
                  <Box sx={{
                    width: "100%",
                    height: 250,
                    bgcolor: "grey.200",
                    borderRadius: 2,
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "text.disabled",
                  }}>
                    Image / Screenshot Placeholder
                  </Box>
                )}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MIAProject;
