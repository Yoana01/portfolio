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
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import FinTechCover from "../assets/FintechPic1.png";
import Concept from "../assets/FintechMindMap.png";
import RequirementsImg from "../assets/FintechUserReq.png";
import Design from "../assets/FintechPrototype.svg";


/* ---------------- Callout Component ---------------- */

const Callout = ({ children, icon }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      bgcolor: "#fcfcfc",
      px: 3,
      py: 2,
      borderRadius: 3,
      my: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    {icon}

    <Typography
      sx={{
        color: "#7B7155",
        fontWeight: 600,
        fontSize: "1rem",
        lineHeight: 1.6,
      }}
    >
      {children}
    </Typography>
  </Box>
);


/* ---------------- Callout Icons ---------------- */

const calloutIcons = {
  insight: <LightbulbIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
  decision: <ScienceIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
  result: <TrophyIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
  validation: <CheckIcon sx={{ color: "#7B7155", fontSize: 22 }} />,
};


/* ---------------- Sidebar Icons ---------------- */

const icons = [
  <DescriptionOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <LightbulbOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ScienceOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <EmojiEventsOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <ForwardOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
  <CheckCircleOutlinedIcon fontSize="small" sx={{ color: "#444" }} />,
];


/* ---------------- Case Study Sections ---------------- */
const caseStudySections = [
  {
    id: "overview",
    title: "Overview",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Fintech Teens is a UX concept exploring how digital experiences can
          help teenagers better understand the value and consequences of their
          financial decisions.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          The concept was developed as a focused 2.5-day UX project, moving
          from research and problem framing to requirements, concept
          development, and a high-fidelity prototype.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          The design process focused on turning financial literacy into
          something teenagers can see, explore, and experience through everyday
          spending decisions.
        </Typography>
      </>
    ),
    image: FinTechCover,
    imageAlt: "Fintech Teens Cover",
    imageCaption: "Fintech Teens - from spending to understanding.",
  },

  {
    id: "context",
    title: "Problem & Context",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Teenagers are growing up in an increasingly digital environment,
          where technology shapes both their everyday activities and the way
          they interact with money.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#2C3E5F",
            mb: 2,
            mt: 3,
          }}
        >
          The environment today’s teenagers grow up in
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          On a typical school day,{" "}
          <strong>25% of teenagers in the EU spend more than 6 hours</strong>{" "}
          in front of a screen. This increases to{" "}
          <strong>46% on weekends</strong>, with{" "}
          <strong>14% spending more than 10 hours</strong> in front of a
          screen.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          As more of teenagers’ lives move into digital environments, spending
          also becomes increasingly frictionless and less tangible. A few taps
          can turn a purchase into something that feels disconnected from its
          actual value and consequences.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          This creates an opportunity to make financial education more
          practical — helping teenagers understand where their money goes,
          recognise digital risks, and see how everyday spending decisions can
          affect their money and future goals.
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mb: 3,
          }}
        >
          Source: European research on teenagers’ digital behaviour and screen
          time.
        </Typography>

        <Callout icon={calloutIcons.decision}>
          How might we help teenagers better understand the value and
          consequences of their digital spending, while encouraging healthier
          financial habits?
        </Callout>
      </>
    ),
  },

  {
    id: "research",
    title: "Research & Insights",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          Given the 2.5-day timeframe, the research focused on existing
          sources rather than primary user research. The goal was to identify
          relevant patterns around teenagers, financial literacy, and digital
          money management that could inform the concept.
        </Typography>

        <Typography paragraph sx={{ mb: 3 }}>
          The research highlighted several challenges around financial
          knowledge, digital spending, and the way teenagers learn about money.
        </Typography>

        {/* Initial Research Findings */}
        <Grid container spacing={2} sx={{ mt: 1, mb: 4 }}>
          {[
            {
              value: "47%",
              label: "Have a bank account",
            },
            {
              value: "19%",
              label: "Lack basic financial knowledge",
            },
            {
              value: "Digital risks",
              label: "Phishing & hidden subscriptions",
            },
          ].map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.value}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  bgcolor: "#fcfcfc",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize:
                      stat.value === "Digital risks" ? "1.4rem" : "2rem",
                    fontWeight: 800,
                    color: "#2C3E5F",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
<Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mb: 3,
          }}
        >
          Sources: Dina Bhudia, “The Impact of Cash Versus Cards on
          Children's Financial Literacy”;OECD PISA
          Financial Literacy.
        </Typography>
        <Typography paragraph sx={{ mb: 3 }}>
          These findings suggest that financial education needs to go beyond
          simply providing information. Teenagers need opportunities to connect
          financial concepts with everyday decisions and situations they can
          recognise.
        </Typography>

        {/* Mastercard Findings */}
<Grid container spacing={2} sx={{ mb: 4 }}>
  {[
    {
      value: "57%",
      label: "Want parental controls",
    },
    {
      value: "43%",
      label: "Prefer gamified learning",
    },
    {
      value: "48%",
      label: "Want real-world simulations",
    },
    {
      value: "67%",
      label: "Value educational content",
    },
  ].map((finding) => (
    <Grid item xs={12} sm={6} key={finding.value}>
      <Box
        sx={{
          p: 3,
          height: "100%",
          minHeight: 130,
          borderRadius: 3,
          bgcolor: "#fcfcfc",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 800,
            color: "#2C3E5F",
            mb: 1,
          }}
        >
          {finding.value}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.5,
          }}
        >
          {finding.label}
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid>
    <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontStyle: "italic",
            mb: 3,
          }}
        >
          Sources:  Mastercard research on teenagers’ financial literacy and learning preferences.
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Together, these findings pointed towards an experience that combines
          education with realistic situations, engaging learning mechanics,
          and an appropriate level of parental involvement.
        </Typography>

    

        <Callout icon={calloutIcons.insight}>
          Key Insight: Financial education becomes more meaningful when
          teenagers can connect information with realistic decisions, visible
          consequences, and personal goals.
        </Callout>
      </>
    ),
  },

  {
    id: "requirements",
    title: "From Insights to Requirements",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          The research was translated into four core needs: understanding
          spending, planning ahead, learning and staying safe, and maintaining
          independence with appropriate guidance.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          These became requirements around spending awareness, savings goals,
          purchase consequences, practical learning, financial safety,
          motivation, parental controls, and a supportive digital buddy.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          Together, these requirements created a balance between education,
          exploration, and autonomy rather than treating teenagers simply as
          users who need to be taught what to do.
        </Typography>

        <Callout icon={calloutIcons.decision}>
          Design Principle: Guide teenagers without taking away their
          independence.
        </Callout>
      </>
    ),
    image: RequirementsImg,
    imageAlt: "Fintech Teens user requirements",
    imageCaption: "Translating research insights into design requirements.",
  },

  {
    id: "concept",
    title: "Concept & Design",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          The concept brings financial awareness into the everyday decisions
          teenagers already make. Instead of presenting financial literacy as
          something separate from daily life, the experience connects learning,
          spending, saving, and decision-making in one place.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          Spending visualizations make money easier to understand, while
          savings goals connect financial decisions with things teenagers
          actually want to achieve. A potential purchase can also be explored
          before spending, allowing teenagers to see its possible impact on
          their available money and goals.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          Learning is designed around short video content and realistic
          financial scenarios. Rather than simply testing what teenagers
          remember, the concept allows them to explore different choices and
          understand their potential consequences in a safe environment.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          XP, levels, challenges, and rewards provide motivation, while the
          digital buddy adds guidance and encouragement throughout the
          experience. The reward system is intentionally focused on learning
          and healthy financial behaviour rather than encouraging spending.
        </Typography>

        <Callout icon={calloutIcons.decision}>
          Design Direction: Turn financial concepts into something teenagers
          can see, explore, and experience rather than simply read about.
        </Callout>
      </>
    ),
    image: Concept,
    imageAlt: "Fintech Teens interface design",
    imageCaption:
      "Design concept combining financial tracking, learning, and decision-making.",
  },

  {
    id: "prototype",
    title: "Prototype",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          The high-fidelity prototype brings the concept together through a
          set of connected experiences designed around everyday financial
          decisions.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          The experience combines savings goals, purchase consequences,
          scenario-based learning, rewards, and a personalised digital
          companion. Parental controls provide an additional layer of guidance
          while keeping teenagers involved in their own decisions.
        </Typography>

        {/* Figma Prototype */}
        <Box sx={{ mt: 4, mb: 5 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "#f5f5f5",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <iframe
              src="https://embed.figma.com/design/Xl87ulXKpTx02slBDXoicX/Fintech-teenagers?node-id=0-1&embed-host=share"
              title="Fintech Teens interactive prototype"
              style={{
                width: "100%",
                height: "700px",
                border: "none",
                borderRadius: "16px",
                display: "block",
              }}
              allowFullScreen
            />
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              mt: 1,
              color: "text.secondary",
              textAlign: "right",
            }}
          >
            Interactive prototype · Figma
          </Typography>
        </Box>

        {/* Annotations */}
        <Typography
          paragraph
          sx={{
            mb: 2,
            mt: 3,
          }}
        >
          Explore the key design decisions behind the experience.
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          {[
            {
              number: "01",
              title: "Savings goals",
              description:
                "Connect saving with something personal and tangible. Goals such as saving for a bike give money a clear purpose and help teenagers understand how smaller spending decisions can affect something they want to achieve.",
            },
            {
              number: "02",
              title: "Purchase consequences",
              description:
                "Before making a purchase, teenagers can see how it could affect their available money and progress towards their savings goals. The intention is to encourage reflection without taking away the final decision.",
            },
            {
              number: "03",
              title: "Learning scenarios",
              description:
                "Financial concepts are introduced through realistic everyday situations rather than simply asking teenagers to remember information. Scenarios allow them to explore different choices and consider possible consequences.",
            },
            {
              number: "04",
              title: "Motivation & rewards",
              description:
                "XP, levels, challenges, and rewards make learning more engaging while keeping the focus on healthy financial behaviour. The reward system is designed to reinforce learning rather than encourage spending.",
            },
            {
              number: "05",
              title: "Digital companion",
              description:
                "A familiar digital companion stays with the teenager throughout the experience, providing guidance and encouragement. The avatar also adds a layer of personalisation to an otherwise financial-focused experience.",
            },
            {
              number: "06",
              title: "Parental involvement",
              description:
                "Parents provide an additional layer of safety and guidance without becoming the primary user. For example, a purchase above a suggested limit can require parental confirmation while the teenager remains involved in the decision.",
            },
          ].map((item) => (
            <Grid item xs={12} md={6} key={item.number}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2.5,
                  height: "100%",
                  borderRadius: 3,
                  bgcolor: "#fcfcfc",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  },
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    bgcolor: "#2C3E5F",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {item.number}
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      mb: 0.75,
                      color: "#2C3E5F",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Callout icon={calloutIcons.result}>
          Core Experience: Help teenagers understand the consequences of a
          financial decision before they make it.
        </Callout>
      </>
    ),
  },

  {
    id: "takeaways",
    title: "Takeaways & Next Steps",
    description: (
      <>
        <Typography paragraph sx={{ mb: 2 }}>
          The concept explores how financial education can become more
          practical by connecting learning with real spending decisions,
          personal goals, and visible consequences.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          The 2.5-day timeframe allowed the concept to move from research and
          problem framing to a high-fidelity prototype, but it also meant that
          the concept was not validated with real users.
        </Typography>

        <Typography paragraph sx={{ mb: 2 }}>
          The next step would be to test the prototype with teenagers and
          conduct primary research with teenagers, parents, teachers, and
          financial-education or banking experts. This would help validate the
          balance between independence, parental involvement, motivation, and
          financial safety.
        </Typography>

        <Callout icon={calloutIcons.validation}>
          Next Step: Test, research, and refine the concept before moving
          towards a more developed product.
        </Callout>
      </>
    ),
  },
];


/* ---------------- Image Renderer WITH ZOOM ---------------- */

const renderImage = (src, alt, caption) => {
  if (!src) return null;

  return (
    <Box
      sx={{
        mb: 4,
        borderRadius: 3,
      }}
    >
      <Zoom>
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            borderRadius: "8px",
            display: "block",
            cursor: "zoom-in",
          }}
        />
      </Zoom>

      {caption && (
        <Typography
          variant="caption"
          display="block"
          align="center"
          sx={{
            mt: 1,
            color: "text.secondary",
          }}
        >
          {caption} (Click to zoom)
        </Typography>
      )}
    </Box>
  );
};


/* ---------------- Main Component ---------------- */

const FinTechTeens = () => {
  const [activeSection, setActiveSection] = useState(
    caseStudySections[0].id
  );

  useEffect(() => {
    const handleScroll = () => {
      const offsets = caseStudySections.map((section) => {
        const el = document.getElementById(section.id);

        return {
          id: section.id,
          offset: el
            ? el.getBoundingClientRect().top - 120
            : Infinity,
        };
      });

      const visibleSections = offsets.filter(
        (section) => section.offset <= 0
      );

      if (visibleSections.length > 0) {
        setActiveSection(
          visibleSections[visibleSections.length - 1].id
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToId = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const offset = 100;

      const elementPosition =
        el.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };


  return (
    <Container
      maxWidth="lg"
      sx={{
        py: {
          xs: 6,
          md: 10,
        },
      }}
    >
      {/* ---------------- Page Title ---------------- */}

      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 800,
          mb: {
            xs: 6,
            md: 10,
          },
          color: "#2C3E5F",
        }}
      >
        Fintech Teens
      </Typography>


      <Grid container spacing={6}>

        {/* ---------------- Sidebar ---------------- */}

        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              position: "sticky",
              top: 100,
            }}
          >
            <Box
              sx={{
                borderRadius: 3,
                p: 3,
                mb: 4,
                bgcolor: "white",
                boxShadow: 3,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  px: 1,
                  py: 1,
                  fontWeight: 700,
                }}
              >
                Contents
              </Typography>

              <List dense>
                {caseStudySections.map((section, index) => (
                  <ListItemButton
                    key={section.id}
                    onClick={() => scrollToId(section.id)}
                    selected={activeSection === section.id}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      bgcolor: "transparent",

                      "&.Mui-selected": {
                        bgcolor: "transparent",
                      },

                      "&:hover": {
                        bgcolor: "rgba(44,62,95,0.04)",
                      },
                    }}
                  >
                    {icons[index]}

                    <ListItemText
                      primary={section.title}
                      sx={{
                        ml: 1,
                        fontWeight:
                          activeSection === section.id
                            ? 700
                            : 400,
                        borderBottom:
                          activeSection === section.id
                            ? "2px solid #2C3E5F"
                            : "none",
                        pb:
                          activeSection === section.id
                            ? 0.25
                            : 0,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>


          {/* ---------------- Mobile Accordion ---------------- */}

          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "center",
              mb: 4,
              width: "100%",
              position: "sticky",
              top: 0,
              zIndex: 1000,
              bgcolor: "background.paper",
              boxShadow: 2,
              py: 1,
            }}
          >
            <Accordion
              sx={{
                width: "100%",
                maxWidth: 400,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Contents
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <List dense>
                  {caseStudySections.map((section) => (
                    <ListItemButton
                      key={section.id}
                      onClick={() =>
                        scrollToId(section.id)
                      }
                    >
                      <ListItemText
                        primary={section.title}
                        sx={{
                          textAlign: "center",
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>


        {/* ---------------- Main Content ---------------- */}

        <Grid item xs={12} md={9}>
          {caseStudySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Box
                sx={{
                  mb: 12,
                  maxWidth: 800,
                  scrollMarginTop: "100px",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    color: "#2C3E5F",
                  }}
                >
                  {section.title}
                </Typography>

                <Box
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    lineHeight: 1.8,
                  }}
                >
                  {section.description}
                </Box>

                {/* Only render an image if the section actually has one */}

                {section.images
                  ? section.images.map((image, index) =>
                      renderImage(
                        image.src,
                        image.alt,
                        image.caption
                      )
                    )
                  : section.image
                  ? renderImage(
                      section.image,
                      section.imageAlt,
                      section.imageCaption
                    )
                  : null}
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinTechTeens;