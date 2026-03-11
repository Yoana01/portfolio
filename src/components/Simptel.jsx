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
                    Simptel, a growing startup in Eindhoven, provides secure, mission-critical communication services for businesses, emphasizing transparency, simplicity, and connectivity.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    This project focused on designing a visual development tool for Simptel’s identity platform (IDaaS), enabling users to configure authentication, authorization, and accounting (AAA) flows with minimal technical knowledge. The goal: simplify identity customization for developers and non-technical teams.
                </Typography>
                <Callout icon={calloutIcons.insight}>
                    Streamlined identity customization empowers teams to focus on business challenges instead of technical complexity.
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
                    <span style={{ color: "#2C3E5F", fontWeight: 600 }}>The Challenge:</span><br/>
                    Creating custom identity solutions for each client is time-consuming. Industries like telecommunications, banking, and software have unique requirements, forcing developers to spend hours on technical tasks rather than strategic priorities.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    <span style={{ color: "#2C3E5F", fontWeight: 600 }}>Users & Focus:</span><br/>
                    Developers were prioritized as primary users, as improving their workflow efficiency indirectly benefits end-users and business teams.
                </Typography>
                <Callout icon={calloutIcons.insight}>
                    Key Insight: Users need powerful yet intuitive customization that bridges technical complexity with accessibility.
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
                    Competitive analysis and developer interviews highlighted an opportunity: make identity customization accessible via a visual, low-code builder. Focus shifted from security features to simplified workflows without losing flexibility.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Eight developer interviews revealed two adoption drivers: efficiency and clarity. This led to template-based configuration, AI-assisted setup, and a minimal interface structure.
                </Typography>
                <Callout icon={calloutIcons.decision}>
                    Design Decision: Visual, template-driven builder with AI-assisted configuration to reduce complexity while preserving flexibility.
                </Callout>
            </>
        ),
        images: [
            { src: Research, alt: "Wireframes", caption: "Wireframes for Simptel's identity platform" }
        ]
    },
    {
        id: "prototype",
        title: "Prototype & Testing",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    High-fidelity prototypes were developed over three iterations. Early feedback revealed overdesign, leading to refinements that improved clarity, simplicity, and security adherence. Desktop was optimized for full workflows; mobile handled urgent tasks.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Six task-based user tests confirmed the tool was efficient, intuitive, and visually appealing. Users successfully completed tasks, demonstrating measurable improvements in usability and workflow confidence.
                </Typography>
                <Callout icon={calloutIcons.result}>
                    Outcome: Users navigated portal configuration with ease, validating the user-centered design approach.
                </Callout>
            </>
        ),
        images: [
            { src: Design, alt: "Accessibility screen", caption: "Developers can quickly check accessibility compliance using a visual indicator and color contrast checker, reducing configuration errors" },
            { src: Design2, alt: "Flow configuration screen", caption: "Configuration of one of the flows" }
        ]
    },
    {
        id: "impact",
        title: "Impact & Results",
        description: (
            <>
                <Typography paragraph sx={{ mb: 2 }}>
                    The solution reduced complexity and improved clarity in workflow creation. Users structured and customized the Self-Service Portal confidently, with minimal friction.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Desktop optimization supported full workflows; mobile enabled situational, urgent tasks. Clear visual hierarchy and guided configuration improved efficiency and decision-making.
                </Typography>
                <Callout icon={calloutIcons.validation}>
                    Key Result: A validated, user-centered visual development tool for efficient and controlled portal configuration.
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
                    Working at Simptel strengthened my ability to balance creativity with real-world constraints. Collaboration with developers, product owners, and users taught me how to design solutions that are both user-friendly and technically feasible.
                </Typography>
                <Typography paragraph sx={{ mb: 2 }}>
                    Iterative testing and constant feedback refined workflows, improved clarity, and avoided overdesign. Frequent stakeholder communication reinforced the creation of effective, intuitive products.
                </Typography>
                <Callout icon={calloutIcons.insight}>
                    Next Steps: Enhance customization, refine AI-assisted workflows, and expand validation with enterprise users to measure long-term adoption.
                </Callout>
            </>
        ),
        image: SimptelPresent,
        imageAlt: "Project presentation",
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