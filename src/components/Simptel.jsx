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
    AccordionDetails
} from "@mui/material";
import {
    DescriptionOutlined as DescriptionOutlinedIcon,
    LightbulbOutlined as LightbulbOutlinedIcon,
    ScienceOutlined as ScienceOutlinedIcon,
    CheckCircleOutlined as CheckCircleOutlinedIcon,
    EmojiEventsOutlined as EmojiEventsOutlinedIcon,
    ForwardOutlined as ForwardOutlinedIcon,
    LightbulbOutlined as LightbulbIcon,
    CheckCircleOutlined as CheckIcon,
    EmojiEventsOutlined as TrophyIcon,
    ScienceOutlined as ScienceIcon,
    ExpandMore as ExpandMoreIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";

import SimptelUsers from "../assets/Simptel User.png";
import SimptelCover from "../assets/Simptel.png";
import Research from "../assets/Wireframes-Simptel.png";
import Design from "../assets/Simpteldesign1.png";
import Design2 from "../assets/Simpteldesign2.png";
import Design3 from "../assets/Simpteldesign3.png";
import SimptelPresent from "../assets/Simptelpresent.jpeg";

// Modern Callout Component
const Callout = ({ children, icon }) => (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        bgcolor: "#fcfcfc",
        px: 3,
        py: 2,
        borderRadius: 3,
        my: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}>
        {icon}
        <Typography sx={{ color: "#7B7155", fontWeight: 600, fontSize: "1rem", lineHeight: 1.6 }}>
            {children}
        </Typography>
    </Box>
);

const calloutIcons = {
    insight: <LightbulbIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
    decision: <ScienceIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
    result: <TrophyIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
    validation: <CheckIcon sx={{ color: "#7B7155", fontSize: 22 }} />
};

const icons = [
    <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    <ScienceOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
    <ForwardOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
];

// Case study sections
const caseStudySections = [
    {
        id: "overview",
        title: "Overview",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    Simptel, a thriving startup in Eindhoven, specializes in providing businesses with secure, mission-critical communication services, emphasizing transparency, simplicity, and connectivity.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    This project focused on creating a visual development tool for Simptel’s identity platform (IDaaS), enabling users to customize digital identity portals with minimal technical knowledge. The goal was to simplify configuration of authentication, authorization, and accounting (AAA) flows while maintaining security and flexibility.
                </Typography>
                <Callout icon={calloutIcons.insight}>
                    Streamlining identity customization empowers both developers and non-technical users, allowing teams to focus on business challenges rather than complex technical implementation.
                </Callout>
            </>
        ),
        image: SimptelCover,
        imageAlt: "Simptel Cover",
        imageCaption: "Project cover illustrating the Simptel platform."
    },
    {
        id: "context",
        title: "Problem & Context",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    <span style={{ color: "#2C3E5F", fontWeight: 600 }}>The Challenge:</span> <br />
                    Building identity solutions from scratch for every client is time-consuming and inefficient. Industries such as telecommunications, banking, institutions, food service, and software each have unique requirements, making customization essential. Developers often spend valuable time solving technical issues instead of focusing on strategic business goals.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    <span style={{ color: "#2C3E5F", fontWeight: 600 }}>Stakeholder Landscape & Focus:</span><br />
                    The platform serves multiple stakeholders, including developers, end-users, and business teams. Developers were prioritized as the  <span style={{ color: "#7B7155", fontStyle: "italic" }}>primary users</span>, as they directly interact with and configure the system. Focusing on their experience ensures workflow efficiency, clarity, and accuracy, while also benefiting end-users and business stakeholders.
                </Typography>
                <Callout icon={calloutIcons.insight}>
                    <strong>Key Insight:</strong> Users need customization that is powerful yet intuitive. a tool that empowers developers while indirectly improving the end-user experience, bridging the gap between technical complexity and accessibility.
                </Callout>
            </>
        ),
        image: SimptelUsers,
        imageAlt: "Simptel Users",
        imageCaption: "Illustration showing Simptel's user personas."
    },
    {
        id: "ideation",
        title: "Ideation & Design Process",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    Guided by competitive analysis and developer interviews, I positioned the solution around a clear opportunity: making identity customization accessible through a visual, low-code builder. Rather than competing on security features, the focus shifted to simplifying configuration workflows without compromising flexibility.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Through 8 developer interviews, two adoption drivers emerged - efficiency and clarity. This insight reframed the direction from feature expansion to workflow simplification, leading to template-based configuration, AI-assisted setup, and a minimal interface structure.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Additional methods such as brainstorming and concept sketching informed ideation, but the design direction was ultimately guided by developer insights and input from the product owner.
                </Typography>
                <Callout icon={calloutIcons.decision}>
                    Design Decision: Prioritized a visual, template-driven builder with AI-assisted configuration to reduce complexity while preserving advanced flexibility.
                </Callout>
            </>
        ),
        images: [
            { src: Research, alt: "Example of Simptel's identity design", caption: "Wireframes for Simptel's identity platform" }
        ]
    },
    {
        id: "prototype",
        title: "Prototype & Testing",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    Based on wireframe feedback, I developed high-fidelity prototypes over three iterations. The first iteration revealed overdesign issues due to limited early validation with the product owner. Feedback guided refinements to improve clarity, simplicity, and adherence to security requirements. Subsequent iterations focused on incremental development and final pixel-perfect designs, ensuring consistency across mobile and desktop versions.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    During the final phase, I validated the visual development tool with the target audience, conducting six user tests with potential clients. Task-based testing and heuristic evaluation confirmed that users found the tool efficient, intuitive, and visually appealing. Desktop was preferred for full workflow tasks, while mobile was used only for urgent situations. Participants also confirmed that the tool enabled them to create a positive user experience for the Self-Service Portal.
                </Typography>
                <Callout icon={calloutIcons.result}>
                    Outcome: Users successfully completed tasks, demonstrating measurable improvements in usability, efficiency, and overall experience.
                </Callout>
            </>
        ),
        images: [
            {
                src: Design,
                alt: "Simptel high-fidelity prototype screen 1 acccessibility",
                caption: "Accessibility configuration within the Self-Service Portal interface."
            },
            {
                src: Design2,
                alt: "Simptel high-fidelity prototype screen 2",
                caption: "Configuration of one of the flows"
            }
        ]
    },
    {
        id: "impact",
        title: "Impact & Results",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    The validated solution streamlined portal configuration by reducing complexity and increasing clarity in workflow creation. Users were able to structure and customize the Self-Service Portal with confidence and minimal friction.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Clear visual hierarchy and guided configuration improved efficiency and reduced uncertainty during decision-making. Desktop optimization strengthened full-task performance, while mobile supported situational, urgent use cases.
                </Typography>
                <Callout icon={calloutIcons.validation}>
                    Key Result: A validated visual development tool that enables efficient, controlled, and user-centered portal configuration.
                </Callout>
            </>
        ),
        image: Design3,
        imageAlt: "Impact & Results",
        imageCaption: "Final design of the Simptel identity platform's visual development tool."
    },
    {
        id: "takeaways",
        title: "Takeaways & Next Steps",
        description: (
          <>
    <Typography paragraph sx={{ mb: 2 }}>
        Working at Simptel helped me grow as a UX designer by balancing creativity with real-world constraints. Collaborating closely with developers, the product owner, and users taught me how to design solutions that are both user-friendly and technically feasible.
    </Typography>
    <Typography paragraph sx={{ mb: 2 }}>
        Iterative testing and constant feedback helped me refine workflows, improve clarity, and avoid overdesign. This experience reinforced the value of frequent stakeholder communication in shaping effective, intuitive products.
    </Typography>
    <Callout icon={calloutIcons.insight}>
        Next Step: Continue exploring ways to enhance customization and efficiency, and expand validation with enterprise users to measure long-term impact and adoption.
    </Callout>
</>
        ),
        image: SimptelPresent,
        imageAlt: "A picture of the presentation of the Simptel project",
        imageCaption: "A picture of the Simptel project presentation."
    }
];

// Render images without zoom effect
const renderImage = (src, alt, caption) => (
    <Box sx={{ mb: 4, borderRadius: 3, overflow: "hidden" }}>
        <img src={src} alt={alt} style={{ width: "100%", borderRadius: "8px", display: "block" }} />
        <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
            {caption}
        </Typography>
    </Box>
);

const SimptelProject = () => {
    const [activeSection, setActiveSection] = useState(caseStudySections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const offsets = caseStudySections.map(section => {
                const el = document.getElementById(section.id);
                return { id: section.id, offset: el ? el.getBoundingClientRect().top : 0 };
            });
            const current = offsets.reduce((prev, curr) => Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev);
            if (current) setActiveSection(current.id);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 10 }}>
                Simptel Identity Platform
            </Typography>

            <Grid container spacing={6}>
                {/* Left nav unchanged */}
                <Grid item xs={12} md={3}>
                    {/* Desktop sidebar */}
                    <Box sx={{ display: { xs: "none", md: "block" }, position: "sticky", top: 100 }}>
                        <Box sx={{ borderRadius: 3, p: 3, mb: 4, bgcolor: "white", boxShadow: 3 }}>
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
                                            "&.Mui-selected": { bgcolor: "transparent" },
                                            transition: "background 0.3s"
                                        }}
                                    >
                                        {icons[i]}
                                        <ListItemText
                                            primary={s.title}
                                            sx={{
                                                ml: 1,
                                                fontWeight: activeSection === s.id ? 700 : 400,
                                                borderBottom: activeSection === s.id ? "2px solid #2C3E5F" : "none",
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

                {/* Main content */}
                <Grid item xs={12} md={9}>
                    {caseStudySections.map((section, index) => (
                        <motion.div
                            key={index}
                            id={section.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Box sx={{ mb: 12, maxWidth: 800 }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: "primary.main", lineHeight: 1.2 }}>
                                    {section.title}
                                </Typography>
                                <Box sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8 }}>
                                    {section.description}
                                </Box>

                                {section.images
                                    ? section.images.map((img, idx) => renderImage(img.src, img.alt, img.caption))
                                    : section.image
                                        ? renderImage(section.image, section.imageAlt, section.imageCaption)
                                        : <Box sx={{ width: "100%", height: 250, bgcolor: "grey.100", borderRadius: 3, mb: 2, display: "flex", alignItems: "center", justifyContent: "center", color: "text.disabled" }}>
                                            Image / Screenshot Placeholder
                                        </Box>}
                            </Box>
                        </motion.div>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SimptelProject;