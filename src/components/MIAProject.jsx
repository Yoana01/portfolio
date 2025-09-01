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
import MIACover from "../assets/MIA.png";
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
          The Media Innovation Assistant (MIA) is a platform designed to stimulate innovation within the Dutch media sector. It targets start-ups or
          individuals planning to launch one through Media CampusNL. MIA addresses the challenge of validating early-stage ideas by offering a secure
          and supportive environment for experimentation and feedback. This paper presents MIA’s design and evaluation process, highlighting its role in
          empowering media innovators.
          A value-sensitive design process involving iterative prototyping, stakeholder interviews, and usability testing is used to achieve the goal. This
          project focuses on the tension around data privacy, transparency, and trust in generative AI systems.
          User testing for this study uncovered that participants appreciated the AI feedback but were still worried about their data. To address this problem,
          chatbot avatars and an incognito mode are designed to enhance trust and usability. The findings emphasize the importance of balancing
          transparency with explainability and suggest broader implications for responsible AI design in the media sector, integrating human-in-the-loop
          mechanisms and privacy-by-design principles.
        </Typography>
        <Typography>
          A value-sensitive design process involving iterative prototyping, stakeholder interviews, and usability testing is used to achieve the goal. This
          project focuses on the tension around data privacy, transparency, and trust in generative AI systems.
        </Typography>
        <Typography>
          User testing for this study uncovered that participants appreciated the AI feedback but were still worried about their data. To address this problem,
          chatbot avatars and an incognito mode are designed to enhance trust and usability. The findings emphasize the importance of balancing
          transparency with explainability and suggest broader implications for responsible AI design in the media sector, integrating human-in-the-loop
          mechanisms and privacy-by-design principles.
        </Typography>
      </>
    ),
    image: MIACover,
    imageAlt: "MIA Cover",
    imageCaption: "Project cover illustrating the MIA platform."
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
          Based on this research, building user confidence and trust requires <b>privacy, clear explanations, and transparency</b>.
          This aligns with research identifying these elements as foundational pillars of trust in AI systems (Díaz-Rodríguez, 2023).
          Several iterations focused specifically on these aspects: implementing an <b>incognito mode</b> on the main page and refining the
          submission interface to enhance clarity and user control.
        </Typography>
        <Typography paragraph>
          Importantly, privacy is not just one value among many — it is the foundation upon which all other trust-building features depend.
          Designers must adopt a <b>privacy-by-design</b> approach, as even well-intentioned features like personalization may fail to gain users’ trust
          without it. In this context, privacy becomes a requirement for meaningful user engagement and ethical AI deployment.
        </Typography>
        <Typography paragraph>
          <b>The Transparency Paradox in Practice:</b> One main finding was that too much structure or transparency could backfire — an effect
          illustrated by the transparency paradox (Stohl, C., Stohl, M., & Leonardi, P. M., 2016). User feedback revealed that visible evaluation criteria,
          intended to improve clarity, sometimes led to conformity and performative behavior. This could harm the platform’s core goal of encouraging authentic idea-sharing.
        </Typography>
        <Typography paragraph>
          As a result, the design was adjusted to make evaluation criteria <b>selectively visible</b> — available when needed, but not constantly present.
          This shift helped preserve originality while offering enough guidance, directly addressing the challenge of increasing trust and openness
          without compromising user autonomy.
        </Typography>
      </>
    ),
    image: ImpactImg,
    imageAlt: "Impact & Results",
    imageCaption: "Visualization of the AI and human interaction"
  },
  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph>
          Creating MIA presents a complex design challenge, specifically in balancing competing values such as trust, privacy, transparency, and usability.
          The platform’s core objective is to support innovation in the Dutch media sector by offering a safe space for idea validation and knowledge-sharing.
          This was achieved through features such as chatbot avatars, incognito mode, and a structured idea submission flow, which were shown to promote
          user trust and engagement. Participants reported that these elements would help them refine their ideas and feel more confident sharing them.
          Therefore, MIA can effectively support idea development and knowledge-sharing between start-ups by addressing concerns around data privacy
          and AI transparency through thoughtful, value-sensitive design.
        </Typography>
        <Typography paragraph>
          It is essential to position MIA as a supportive assistant rather than a decision-maker, in line with concerns about overreliance on AI and the critical
          need for human oversight in AI-assisted systems (Klingbeil, A., Grützner, C., & Schreck, P., 2024). Users should be encouraged to engage critically
          with the feedback provided, rather than accepting it uncritically, especially given the limitations and contextual nature of the underlying data
          (Beaulieu, A., Leonelli, S., 2021). To support this, the system should be trained on diverse and representative data to minimize the risk of
          algorithmic biases. Maintaining a human-in-the-loop approach is crucial in the idea evaluation and chatbot interactions. Human oversight ensures
          the platform remains adaptable, context-aware, and responsive to evolving user needs (Figure 13).
          Another key recommendation is to strengthen the platform’s community aspect. The participants expressed a desire for a blog-like feature where
          they could share their challenges and successes through collective learning and a sense of belonging.
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

const MIAProject = () => {
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
