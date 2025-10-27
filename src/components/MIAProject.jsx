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
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import BlackBox from "../assets/MIAblackbox.png";
import MIACover from "../assets/MIA.png";
import Research from "../assets/MIA RESEARCH.png";
import Design from "../assets/Design 2.png";
import TakeawaysImg from "../assets/Support.png";
import ImpactImg from "../assets/MIA Design.png";
import { motion } from "framer-motion";

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#32620e" }} />,
];
const caseStudySections = [
  {
    id: "overview",
    title: "Overview",
    description: (
      <>
        <Typography>
          The Media Innovation Assistant (MIA) is a platform designed to stimulate innovation within the Dutch media sector. It targets start-ups or
          individuals planning to launch one through Media CampusNL. MIA addresses the challenge of validating early-stage ideas by offering a secure
          and supportive environment for experimentation and feedback.
        </Typography>
        <Typography>
          A value-sensitive design process involving iterative prototyping, stakeholder interviews, and usability testing is used to achieve the goal. This
          project focuses on the tension around data privacy, transparency, and trust in generative AI systems.
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
          AI systems are increasingly integrated into everyday decision-making, improving productivity and efficiency (Klingbeil et al., 2024). Yet, this integration carries risks: 66% of people rely on AI outputs without critical evaluation, and 56% have made mistakes because of it (Gillespie, 2025). This overreliance, driven by perceptions of AI’s mastery and efficiency, often hides the need for human oversight and critical thinking (Buçinca et al., 2021).
        </Typography>
        <Typography>
          In the media sector, where creativity, data ownership, and trust are crucial, professionals face a similar tension. Many view AI as a “black box” - powerful yet opaque - and hesitate to use it due to unclear data handling and transparency (Masood, 2025).
        </Typography>
        <Typography>
          This project explores how the Media Innovation Assistant (MIA) can support Dutch media start-ups in generating ideas and sharing knowledge responsibly. Through six interviews with start-up owners, a key insight emerged: while users value AI tools, their main concern is how their data is used, revealing the “privacy paradox” (Gaber & Volkamer, 2018).
        </Typography>
      </>
    ),
    image: BlackBox,
    imageAlt: "AI Black Box: Human Uncertainty in the Age of Automation.",
    imageCaption: "Illustration showing AI Black Box: Human Uncertainty in the Age of Automation."
  },
  {
    id: "ideation",
    title: "Ideation & Design Process",
    description: (
      <>
        <Typography paragraph>
          The project employed methods based on Human-Centred Design and Value-Sensitive Design. This approach allows the alignment
          among MIA, user values, and the addressed value tensions found earlier. Throughout the iterations, these principles directed the evaluation process,
          which involved methods like cognitive walkthroughs, co-design sessions, and other user-centred methods.
        </Typography>
      </>
    ),
    images: [
      { src: Research, alt: "Research methods used to solve the problem", caption: "Research methods used to solve the problem" }
    ]
  },
  {
    id: "prototype",
    title: "Prototype & Testing",
    description: (
      <>
        <Typography paragraph>
          Prototyping focused on creating a platform that balanced usability, privacy, and transparency. Early iterations tested structured submission flows and selective display of evaluation criteria to maintain user autonomy while providing guidance.
        </Typography>
        <Typography paragraph>
          User testing informed refinements, including the addition of a chatbot avatar for real-time guidance, clearer instructions, and an incognito mode to enhance trust. These iterations ensured that MIA supported idea generation and feedback collection in a way that respected user values and promoted confidence in sharing ideas.
        </Typography>
      </>
    ),
    images: [
      { src: Design, alt: "One of the pages of MIA", caption: "Example of a MIA design page" }
    ]
  },
  {
    id: "impact",
    title: "Impact & Results",
    description: (
      <>
        <Typography paragraph>
          Research highlighted that building user trust requires <b>privacy, clarity, and transparency</b> (Díaz-Rodríguez, 2023). Key iterations included an <b>incognito mode</b> on the main page and refinements to the submission flow to enhance user control and clarity.
        </Typography>
        <Typography paragraph>
          Privacy is the foundation for all trust-building features. Adopting a <b>privacy-by-design</b> approach ensures that even features like personalization gain user confidence, making privacy essential for ethical AI deployment and meaningful engagement.
        </Typography>
        <Typography paragraph>
          <b>The Transparency Paradox:</b> Too much visible structure can backfire (Stohl et al., 2016). Users reported that constantly visible evaluation criteria led to conformity, reducing authentic idea-sharing.
        </Typography>
        <Typography paragraph>
          To address this, evaluation criteria were made <b>selectively visible</b>, available when needed but not constantly displayed. This preserved originality while providing guidance, balancing trust, transparency, and user autonomy.
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
          Designing MIA required balancing trust, privacy, transparency, and usability. Features like chatbot avatars, incognito mode, and a structured submission flow promoted trust and engagement, helping participants refine ideas confidently. MIA effectively supports idea validation and knowledge-sharing for Dutch media start-ups.
        </Typography>
        <Typography paragraph>
          MIA is positioned as a <b>supportive assistant</b>, not a decision-maker, emphasizing human oversight (Klingbeil et al., 2024) and critical engagement with AI feedback (Beaulieu & Leonelli, 2021). Training on diverse data minimizes bias, while a human-in-the-loop approach keeps interactions adaptable and context-aware. 
        </Typography>
      </>
    ),
    image: TakeawaysImg,
    imageAlt: "AI as a supportive assistant",
    imageCaption: "Illustration showing AI as a supportive assistant rather than a decision-maker."
  }
];


const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MIAProject = () => {
  const [activeSection, setActiveSection] = useState(caseStudySections[0].id);
  const [openImg, setOpenImg] = useState(null);

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


  const renderImage = (src, alt, caption) => (
    <Box sx={{ position: "relative", mb: 2 }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          cursor: "zoom-in"
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpenImg(src)}
      />
      <IconButton
        onClick={() => setOpenImg(src)}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
        }}
        size="small"
      >
        <ZoomInIcon />
      </IconButton>
      <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
        {caption}
      </Typography>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 8 }}>
        MIA: Media Innovation Assistant
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
            <Box sx={{ borderRadius: 2, p: 2, mb: 4, bgcolor: "white", boxShadow: 3 }}>
              <Typography variant="subtitle2" sx={{ px: 1, py: 1, fontWeight: 700 }}>Contents</Typography>
              <List dense>
                {caseStudySections.map((s, i) => (
                  <ListItemButton
                    key={s.id}
                    onClick={() => scrollToId(s.id)}
                    selected={activeSection === s.id}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: "transparent",
                      "&.Mui-selected": {
                        bgcolor: "transparent", // remove background
                      },
                    }}
                  >
                    {icons[i]}
                    <ListItemText
                      primary={s.title}
                      sx={{
                        ml: 1,
                        fontWeight: activeSection === s.id ? 700 : 400,
                        borderBottom: activeSection === s.id ? "2px solid #32620e" : "none",
                      }}
                    />
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
                  section.images.map((img, idx) => renderImage(img.src, img.alt, img.caption))
                ) : section.image ? (
                  renderImage(section.image, section.imageAlt, section.imageCaption)
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
                      color: "text.disabled"
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

      {/* Zoomed image dialog */}
      <Dialog open={Boolean(openImg)} onClose={() => setOpenImg(null)} maxWidth="lg">
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => setOpenImg(null)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box component="img" src={openImg} alt="Zoomed Image" sx={{ width: "100%", height: "auto", borderRadius: 1 }} />
        </Box>
      </Dialog>
    </Container>
  );
};

export default MIAProject;
