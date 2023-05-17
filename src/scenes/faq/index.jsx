import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="20px"
      sx={{
        "& .MuiAccordion-root": {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Header title="FAQ" subtitle="Search Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            exercitationem reiciendis aspernatur animi explicabo, nulla nemo
            deleniti, sint sit nostrum incidunt aut, eveniet maxime fugit
            obcaecati repellendus eligendi quam alias.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            exercitationem reiciendis aspernatur animi explicabo, nulla nemo
            deleniti, sint sit nostrum incidunt aut, eveniet maxime fugit
            obcaecati repellendus eligendi quam alias.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Yet Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            exercitationem reiciendis aspernatur animi explicabo, nulla nemo
            deleniti, sint sit nostrum incidunt aut, eveniet maxime fugit
            obcaecati repellendus eligendi quam alias.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Still An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            exercitationem reiciendis aspernatur animi explicabo, nulla nemo
            deleniti, sint sit nostrum incidunt aut, eveniet maxime fugit
            obcaecati repellendus eligendi quam alias.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Enough Important Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            exercitationem reiciendis aspernatur animi explicabo, nulla nemo
            deleniti, sint sit nostrum incidunt aut, eveniet maxime fugit
            obcaecati repellendus eligendi quam alias.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
