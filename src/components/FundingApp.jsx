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
import financeImg from "../assets/Finance Cover.png";
import SadStudent from "../assets/SadStudent.png";
import Students from "../assets/Students.png";
// import financeEmpathy from "../assets/Finance -Empathy.png";

import { motion } from "framer-motion";

const caseStudySections = [
  {
    id: "overview",
    title: "Financial App: Overview",
    description: (
      <>
        <Typography variant="h6">Overview</Typography>
        <Typography>
          This case study demonstrates the design and research process behind a
          personalized, data-driven financial management tool for students aged
          18–25. Through surveys, focus groups, expert interviews, storyboards,
          empathy mapping, and stakeholder analysis, key insights were
          uncovered: students often rely on family or DUO support, prefer Excel
          over finance apps, and experience stress when managing finances.
        </Typography>
      </>
    ),
    image: financeImg,
    imageAlt: "Financial App Cover",
    imageCaption: "Project cover illustrating the finacial app.",
  },
  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography>
          Financial literacy is a crucial skill, yet many young adults struggle
          to manage their finances effectively due to limited knowledge.{" "}
          <em>
            The research question - how can a personalized, data-driven
            financial management tool be designed to effectively support diverse
            student populations in improving their financial habits and
            engagement?
          </em>
        </Typography>
        <Typography>
          By promoting responsible spending, providing actionable insights, and
          supporting long-term financial planning, the tool empowers students to
          take control of their finances and reduce stress.
        </Typography>
      </>
    ),
    image: SadStudent,
    imageAlt: "Student stressed about finances",
    imageCaption: "Illustration showing the sad student.",
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography variant="h6">Methodology</Typography>
        <Typography>
          <strong>Empathy Mapping:</strong> The research began with creating an
          empathy map to visualize the target audience, based on initial
          assumptions rather than interviews.
        </Typography>
        <Typography>
          <strong>Toned and Untoned Values:</strong> Toned and untoned values
          were identified to understand students’ priorities versus their actual
          behaviors.
        </Typography>
        <Typography>
          <strong>Stakeholder Map:</strong> A stakeholder map was created to
          identify all parties involved in student financial management.
        </Typography>
        <Typography>
          <strong>Survey:</strong> To validate assumptions and identify the
          target audience, a survey was shared with colleagues and on Instagram.
        </Typography>
        <Typography>
          <strong>Expert Interviews:</strong> Two interviews were conducted with
          bank representatives to gain insights beyond student perspectives.
        </Typography>
        <Typography>
          <strong>Focus Group:</strong> A focus group with two teammates used
          inductive thematic and semantic analysis.
        </Typography>
        <Typography>
          <strong>Storyboards:</strong> Students completed storyboards exploring
          financial literacy resources and personal finance tracking.
        </Typography>
      </>
    ),
    // images: [
    //   { src: financeEmpathy, alt: "Finance Empathy", caption: "Empathy Map" },
    //   {
    //     src: financePersona,
    //     alt: "Finance Persona",
    //     caption: "Persona of the student",
    //   },
    // ],
    isResearch: true, // 👈 new flag to embed Jam here
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph>
          When I started working on the prototype, my first focus was on
          experimenting with colors. In the first iteration, I chose green,
          because according to color theory it conveys calmness.
        </Typography>
        <Typography paragraph>
          User testing played a crucial role in shaping the prototype further.
          Testers pointed out that some of the questions could either be skipped
          or made more efficient, which gave me direction on how to streamline
          the experience.
        </Typography>
      </>
    ),
    isPrototype: true,
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          The research showed clear similarities between the literature review and study results. Many students still rely on family or DUO support, motivating them to seek independence through part-time work. Interestingly, <b>70% preferred Excel</b> over financial apps for convenience.
        </Typography>
        <Typography paragraph>
          From the <b>banks’ perspective</b>, younger users favor step-by-step short videos (e.g., Instagram reels) for learning. The participating bank also provides financial literacy lectures in high schools. Focus groups revealed that financial apps are often linked to <b>negative emotions</b> - stress, anxiety, and overwhelm. However, students were more open to apps if they were certified as secure and included educational video content.
        </Typography>
        <Typography paragraph>
          Future research should explore <b>financial avoidance</b> and how to shift students’ mindset. The challenge is to design tools that promote literacy, motivate usage, and reduce stress.
        </Typography>
        <Typography paragraph>
          <b>In conclusion:</b> The target audience experiences financial anxiety and lacks confidence in their knowledge. The app should act as a <b>learning space</b> to build <b>confidence in financial skills</b>, while motivating users to track expenses and reduce spending.
        </Typography>
      </>
    ),
    image: Students,
    imageAlt: "Student feeling happy about finances",
    imageCaption: "AI Illustration showing the happy students because they are not worried about their finances.",
  },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const FinanceApp = () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map((section) => {
        const el = document.getElementById(section.id);
        return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
      });
      const current =
        offsets.find((section) => section.offset >= 0) ||
        offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ color: "text.secondary", mb: 3 }}>
                  {section.description}
                </Box>

                {/* Conditional Images / Prototype / Research Jam */}
                {section.isPrototype ? (
                  <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="800"
                      height="450"
                      src="https://embed.figma.com/design/uvowkaNI2In1FGhXSyGmTD/Finance-App?node-id=37-1269&embed-host=share"
                      allowFullScreen
                      title="Finance App Prototype"
                    />
                  </Box>
                ) : section.isResearch ? (
                  <>
                    {section.images?.map((img, idx) => (
                      <Box key={idx} sx={{ mb: 2 }}>
                        <Box
                          component="img"
                          src={img.src}
                          alt={img.alt}
                          sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: 2,
                            mb: 1,
                            boxShadow: 3,
                          }}
                        />
                        <Typography
                          variant="caption"
                          display="block"
                          align="center"
                          sx={{ mb: 2 }}
                        >
                          {img.caption}
                        </Typography>
                      </Box>
                    ))}
                    {/* Embed Figma Jam (Situation Map) */}
                    <Box sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
                      <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="800"
                        height="450"
                        src="https://embed.figma.com/board/ll07NUUDbfCHruIXm33pwc/Finance-Research?node-id=1-6843&embed-host=share"
                        allowFullScreen
                        title="Finance Situation Map"
                      />
                    </Box>
                  </>
                ) : section.images ? (
                  section.images.map((img, idx) => (
                    <Box key={idx} sx={{ mb: 2 }}>
                      <Box
                        component="img"
                        src={img.src}
                        alt={img.alt}
                        sx={{
                          width: "100%",
                          height: "auto",
                          borderRadius: 2,
                          mb: 1,
                          boxShadow: 3,
                        }}
                      />
                      <Typography
                        variant="caption"
                        display="block"
                        align="center"
                        sx={{ mb: 2 }}
                      >
                        {img.caption}
                      </Typography>
                    </Box>
                  ))
                ) : section.image ? (
                  <Box sx={{ mb: 2 }}>
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.imageAlt}
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 2,
                        mb: 1,
                        boxShadow: 3,
                      }}
                    />
                    <Typography variant="caption" display="block" align="center">
                      {section.imageCaption}
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: 250,
                      bgcolor: "grey.200",
                      borderRadius: 2,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "text.disabled",
                    }}
                  >
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

export default FinanceApp;
