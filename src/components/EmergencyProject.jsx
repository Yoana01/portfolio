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
    title: "Emergency Chatbot: Overview",
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
    We explored multiple ideation methods - including analogies, assumptions, provocations, random entry, SCAMPER, and Round Robin - to generate creative solutions for emergency care.
  </Typography>
  <Typography paragraph>
    <b>Analogies:</b> Comparing ER services to <b>McDonald’s</b> (fast, efficient) and a <b>kettle</b> (timely, multipurpose) inspired ideas for streamlining processes and leveraging technology. Mood boards helped visualize concepts and spark further creativity.
  </Typography>
  <Typography paragraph>
    <b>Assumptions & Insights:</b> Challenging assumptions revealed <b>communication barriers</b> and <b>overworked staff</b> as weak points, highlighting opportunities for technology - like an AI chatbot - to support both patients and staff.
  </Typography>
  <Typography paragraph>
    <b>Round Robin x SCAMPER:</b> 
    <ul>
      <li>Round 1: Initial solutions faced unrealistic expectations (robots everywhere, AI errors, stress from tracking ambulances).</li>
      <li>Round 2: Focus shifted to patient autonomy and data-driven solutions, noting some patients may prefer human help only.</li>
      <li>Round 3: Design criteria overlapped with previous rounds; human supervision was deemed necessary due to potential AI biases.</li>
    </ul>
  </Typography>
  <Typography paragraph>
    <b>Outcomes:</b> Methods led to diverse ideas, including additional ER checkpoints, sectioned spaces for efficiency, and automated triage, directly informing the design of our AI-driven online emergency form.
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
          When working on the prototype, I experimented with colors to influence user experience. The first iteration used green for calmness, the second red to convey hospital urgency, and the final blue to communicate stability and peace.
        </Typography>
        <Typography paragraph>
          <b>User testing</b> shaped the prototype further. Testers suggested making some questions skippable or more efficient, guiding a <b>streamlined experience</b>.
        </Typography>
        <Typography paragraph>
          An idea that emerged was a <b>chatbot inspired by Uber</b> that provides <b>real-time ambulance updates</b> and <b>follow-up interactions</b> to check on users. This fosters <b>empathy and care</b> while collecting feedback to improve the system over time.
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
          I evaluated the Diagnosis Chatbot through multiple user tests. A SUS survey scored it 77.8, showing good usability. Prototype testing with seven participants (three experts) and the think-aloud method revealed both issues and improvement ideas, like adding more colors.
        </Typography>
        <Typography paragraph>
          Users’ expectations varied: some wanted speed, others detailed explanations. The ER chatbot was praised for efficiency, yet participants suggested extra questions and severity justifications. The body scan feature stood out as the most appreciated.
        </Typography>
        <Typography paragraph>
          Testing combined with literature research confirmed that early detection before hospital arrival can improve outcomes. Key design factors included real-time data, clear language for all digital literacy levels, and balancing guidance with autonomy and trust.
        </Typography>
        <Typography paragraph>
          A main challenge was reconciling user control with the system’s decision-making. While not all criteria were met, the insights gained shaped clear priorities for the next iteration.
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
          This project explored <b>balancing efficiency and empathy</b> in emergency care design. Users valued the ER chatbot’s
          <b> speed and smooth experience</b> but also requested <b>reassurance, explanations, and transparency</b>, highlighting
          the challenge of balancing user autonomy with AI guidance.
        </Typography>
        <Typography paragraph>
          Iterative testing revealed gaps like justifying severity levels and adapting language for diverse digital literacy,
          while features such as <b>body scans</b> and <b>video explanations</b> boosted <b>trust and inclusivity</b>.
        </Typography>
        <Typography paragraph>
          I built a <b>LangChain prototype</b> to experiment with <b>real-time guidance</b>, demonstrating potential for
          scalable, data-driven emergency support.
        </Typography>
        <Typography paragraph>
          Next steps include broader testing, collaboration with healthcare professionals, and real-time data integratio
          (e.g., wearables, EHRs), keeping <b>usability, clarity, and trust</b> at the heart of <b>human-centered AI design</b>.
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

const UXCaseStudyPage = () => {
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
      {/* <Typography variant="h4" align="left" sx={{ fontWeight: "bold", mb: 8 }}>
        
      </Typography> */}

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

export default UXCaseStudyPage;
