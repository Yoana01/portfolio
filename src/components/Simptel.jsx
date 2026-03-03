// import React, { useState, useEffect } from "react";
// import {
//     Box,
//     Container,
//     Typography,
//     Grid,
//     List,
//     ListItemButton,
//     ListItemText,
//     Accordion,
//     AccordionSummary,
//     AccordionDetails
// } from "@mui/material";
// import {
//     DescriptionOutlined as DescriptionOutlinedIcon,
//     LightbulbOutlined as LightbulbOutlinedIcon,
//     ScienceOutlined as ScienceOutlinedIcon,
//     CheckCircleOutlined as CheckCircleOutlinedIcon,
//     EmojiEventsOutlined as EmojiEventsOutlinedIcon,
//     ForwardOutlined as ForwardOutlinedIcon,
//     LightbulbOutlined as LightbulbIcon,
//     CheckCircleOutlined as CheckIcon,
//     EmojiEventsOutlined as TrophyIcon,
//     ScienceOutlined as ScienceIcon,
//     ExpandMore as ExpandMoreIcon
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// import SimptelUsers from "../assets/Simptel User.png";
// import SimptelCover from "../assets/Simptel.png";
// import Research from "../assets/MIA RESEARCH.png";
// import Design from "../assets/Design 2.png";
// import TakeawaysImg from "../assets/Support.png";
// import ImpactImg from "../assets/MIA Design.png";

// // Modern Callout Component
// const Callout = ({ children, icon }) => (
//     <Box sx={{
//         display: "flex",
//         alignItems: "center",
//         gap: 1.5,
//         bgcolor: "#fcfcfc",
//         px: 3,
//         py: 2,
//         borderRadius: 3,
//         my: 3,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     }}>
//         {icon}
//         <Typography sx={{ color: "#7B7155", fontWeight: 600, fontSize: "1rem", lineHeight: 1.6 }}>
//             {children}
//         </Typography>
//     </Box>
// );

// const calloutIcons = {
//     insight: <LightbulbIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
//     decision: <ScienceIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
//     result: <TrophyIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
//     validation: <CheckIcon sx={{ color: "#7B7155", fontSize: 22 }} />
// };

// const icons = [
//     <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
//     <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
//     <ScienceOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
//     <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
//     <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
//     <ForwardOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
// ];

// // Case study sections
// const caseStudySections = [
//     {
//         id: "overview",
//         title: "Overview",
//         description: (
//             <>
//                 <Typography paragraph sx={{ mb: 2 }}>
//                     Simptel, a thriving startup in Eindhoven, specializes in providing businesses with secure, mission-critical communication services, emphasizing transparency, simplicity, and connectivity.
//                 </Typography>
//                 <Typography paragraph sx={{ mb: 2 }}>
//                     This project focused on creating a visual development tool for Simptel’s identity platform (IDaaS), enabling users to customize digital identity portals with minimal technical knowledge. The goal was to simplify configuration of authentication, authorization, and accounting (AAA) flows while maintaining security and flexibility.
//                 </Typography>
//                 <Callout icon={calloutIcons.insight}>
//                     Streamlining identity customization empowers both developers and non-technical users, allowing teams to focus on business challenges rather than complex technical implementation.
//                 </Callout>
//             </>
//         ),
//         image: SimptelCover,
//         imageAlt: "Simptel Cover",
//         imageCaption: "Project cover illustrating the Simptel platform."
//     },
//   {
//   id: "context",
//   title: "Problem & Context",
//   description: (
//     <>
//       <Typography paragraph sx={{ mb: 2 }}>
//         <strong>The Challenge:</strong> Building identity solutions from scratch for every client is time-consuming and inefficient. Industries like telecommunications, banking, institutions, food service, and software each have unique requirements, making customization essential. Developers often spend valuable time solving technical issues instead of focusing on business goals.
//       </Typography>
//       <Typography paragraph sx={{ mb: 2 }}>
//         <strong>User Implications:</strong><br />
//         - <span style={{ color: "#7B7155" }}>Primary Users:</span> Developers need an intuitive, flexible tool to configure portals efficiently.<br />
//         - <span style={{ color: "#7B7155" }}>Secondary Users:</span> End-users rely on these configurations, so usability indirectly affects their experience.<br />
//         - <span style={{ color: "#7B7155" }}>Tertiary Users:</span> Companies expect a secure, customizable platform to meet business requirements.
//       </Typography>
//       <Callout icon={calloutIcons.insight}>
//         <strong>Key Insight:</strong> Users need customization that is powerful yet intuitive—a tool that empowers developers while indirectly improving the end-user experience, bridging the gap between technical complexity and accessibility.
//       </Callout>
//     </>
//   ),
//     image: SimptelUsers,
//     imageAlt: "Simptel Users",
//     imageCaption: "Illustration showing Simptel's user personas."
//   },
//   {
//   id: "ideation",
//   title: "Ideation & Design Process",
//   description: (
//     <>
//       <Typography paragraph sx={{ mb: 2 }}>
//         Guided by competitive analysis and developer interviews, I positioned the solution around a clear opportunity: making identity customization accessible through a visual, low-code builder. Rather than competing on security features, the focus shifted to simplifying configuration workflows without compromising flexibility.
//       </Typography>
//       <Typography paragraph sx={{ mb: 2 }}>
//         Through 8 developer interviews, two adoption drivers emerged - efficiency and clarity. This insight reframed the direction from feature expansion to workflow simplification, leading to template-based configuration, AI-assisted setup, and a minimal interface structure.
//       </Typography>
//       <Callout icon={calloutIcons.decision}>
//         Design Decision: Prioritized a visual, template-driven builder with AI-assisted configuration to reduce complexity while preserving advanced flexibility.
//       </Callout>
//     </>
//   ),
//   images: [
//     { src: Research, alt: "Research and ideation methods", caption: "Competitive analysis, interviews, and concept exploration" }
//   ]
// },
// {
//     id: "prototype",
//         title: "Prototype & Testing",
//             description: (
//                 <>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         Prototypes balanced usability, privacy, and transparency. Structured submission flows and selective evaluation criteria allowed users to stay in control while receiving guidance.
//                     </Typography>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         Refinements included chatbot avatars for context-aware support and an incognito mode to address privacy concerns.
//                     </Typography>
//                     <Callout icon={calloutIcons.result}>
//                         Outcome: Users reported higher confidence sharing ideas; task success improved to 80–95% and SUS score increased from 67.5 to 83.75, showing measurable improvements in usability and trust.
//                     </Callout>
//                 </>
//             ),
//                 images: [
//                     { src: Design, alt: "One of the pages of MIA", caption: "Example of a MIA design page" }
//                 ]
// },
// {
//     id: "impact",
//         title: "Impact & Results",
//             description: (
//                 <>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         Testing confirmed privacy, clarity, and transparency are essential for trust. Selective visibility of evaluation criteria preserved originality while providing guidance.
//                     </Typography>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         Thoughtful design decisions increased authentic idea submissions, reduced hesitation to share, and demonstrated measurable impact in usability and engagement.
//                     </Typography>
//                     <Callout icon={calloutIcons.validation}>
//                         Key Result: Balanced transparency and guidance enabled users to experiment confidently without compromising creativity.
//                     </Callout>
//                 </>
//             ),
//                 image: ImpactImg,
//                     imageAlt: "Impact & Results",
//                         imageCaption: "Visualization of the AI and human interaction"
// },
// {
//     id: "takeaways",
//         title: "Takeaways & Next Steps",
//             description: (
//                 <>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         MIA demonstrates how AI can act as a supportive assistant rather than a decision-maker. Human-in-the-loop interactions and context-aware design reduced bias while empowering users.
//                     </Typography>
//                     <Typography paragraph sx={{ mb: 2 }}>
//                         Key design elements-chatbot avatars, structured submission flows, and incognito mode-promoted engagement and supported idea refinement.
//                     </Typography>
//                     <Callout icon={calloutIcons.insight}>
//                         Next Step: Expand collaborative validation features while maintaining trust, autonomy, and transparency.
//                     </Callout>
//                 </>
//             ),
//                 image: TakeawaysImg,
//                     imageAlt: "AI as a supportive assistant",
//                         imageCaption: "Illustration showing AI as a supportive assistant rather than a decision-maker."
// }
// ];

// // Render images without zoom effect
// const renderImage = (src, alt, caption) => (
//     <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
//         <img src={src} alt={alt} style={{ width: "100%", borderRadius: "8px", display: "block" }} />
//         <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
//             {caption}
//         </Typography>
//     </Box>
// );

// const MIAProject = () => {
//     const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

//     useEffect(() => {
//         const handleScroll = () => {
//             const offsets = caseStudySections.map(section => {
//                 const el = document.getElementById(section.id);
//                 return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
//             });
//             const current = offsets.reduce((prev, curr) => Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev);
//             if (current) setActiveSection(current.id);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToId = (id) => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     };

//     return (
//         <Container maxWidth="lg" sx={{ py: 10 }}>
//             <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 10 }}>
//                 MIA: Media Innovation Assistant
//             </Typography>

//             <Grid container spacing={6}>
//                 {/* Left nav unchanged */}
//                 <Grid item xs={12} md={3}>
//                     {/* Desktop sidebar */}
//                     <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
//                         <Box sx={{ borderRadius: 3, p: 3, mb: 4, bgcolor: "white", boxShadow: 3 }}>
//                             <Typography variant="subtitle2" sx={{ px: 1, py: 1, fontWeight: 700 }}>Contents</Typography>
//                             <List dense>
//                                 {caseStudySections.map((s, i) => (
//                                     <ListItemButton
//                                         key={s.id}
//                                         onClick={() => scrollToId(s.id)}
//                                         selected={activeSection === s.id}
//                                         sx={{
//                                             borderRadius: 2,
//                                             mb: 1,
//                                             bgcolor: "transparent",
//                                             "&.Mui-selected": { bgcolor: "transparent" },
//                                             transition: "background 0.3s"
//                                         }}
//                                     >
//                                         {icons[i]}
//                                         <ListItemText
//                                             primary={s.title}
//                                             sx={{
//                                                 ml: 1,
//                                                 fontWeight: activeSection === s.id ? 700 : 400,
//                                                 borderBottom: activeSection === s.id ? "2px solid #2C3E5F" : "none",
//                                             }}
//                                         />
//                                     </ListItemButton>
//                                 ))}
//                             </List>
//                         </Box>
//                     </Box>

//                     {/* Mobile accordion */}
//                     <Box sx={{
//                         display: { xs: "flex", md: "none" },
//                         justifyContent: "center",
//                         mb: 4,
//                         width: "100%",
//                         position: "sticky",
//                         top: 0,
//                         zIndex: 1000,
//                         bgcolor: "background.paper",
//                         boxShadow: 2,
//                         py: 1
//                     }}>
//                         <Accordion sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
//                             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                 <Typography variant="subtitle1" sx={{ fontWeight: 700, textAlign: "center", width: "100%" }}>
//                                     Contents
//                                 </Typography>
//                             </AccordionSummary>
//                             <AccordionDetails>
//                                 <List dense>
//                                     {caseStudySections.map((s) => (
//                                         <ListItemButton key={s.id} onClick={() => scrollToId(s.id)}>
//                                             <ListItemText primary={s.title} sx={{ textAlign: "center" }} />
//                                         </ListItemButton>
//                                     ))}
//                                 </List>
//                             </AccordionDetails>
//                         </Accordion>
//                     </Box>
//                 </Grid>

//                 {/* Main content */}
//                 <Grid item xs={12} md={9}>
//                     {caseStudySections.map((section, index) => (
//                         <motion.div
//                             key={index}
//                             id={section.id}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.6, delay: index * 0.15 }}
//                         >
//                             <Box sx={{ mb: 12, maxWidth: 800 }}>
//                                 <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: "primary.main", lineHeight: 1.2 }}>
//                                     {section.title}
//                                 </Typography>
//                                 <Box sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
//                                     {section.description}
//                                 </Box>

//                                 {section.images
//                                     ? section.images.map((img, idx) => renderImage(img.src, img.alt, img.caption))
//                                     : section.image
//                                         ? renderImage(section.image, section.imageAlt, section.imageCaption)
//                                         : <Box sx={{ width: "100%", height: 250, bgcolor: "grey.100", borderRadius: 3, mb: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "text.disabled" }}>
//                                             Image / Screenshot Placeholder
//                                         </Box>}
//                             </Box>
//                         </motion.div>
//                     ))}
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default MIAProject;