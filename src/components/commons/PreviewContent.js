import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Badge,
} from "@mui/material";
import {
  imgUrlTemplateForW300,
  posterReplacementImgForImgSize300,
} from "../../helpers/constants";
import DetailContent from "./DetailContent";
import "../../customStyles/PreviewContent.css";

const styleCard = {
  display: "flex",
  flexDirection: "column",
  "& .MuiCardMedia-img": {
    flex: 1,
    objectFit: "fill",
  },
  "& .MuiPaper-root": {
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiCardActions-root div": {
    width: "100%",
  },
  "& .MuiCardActions-root button": {
    width: "100%",
  },
  "& .MuiTypography-root": {
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "1rem",
  },
};

const styleBadge = {
  height: "100%",
  width: "100%",
};

const PreviewContent = ({ passoverPropObj }) => {
  const {
    id,
    poster,
    title,
    date,
    mediaType,
    mediaTypeText,
    voteAvg,
    extraQueryStrForDetailReq,
    setLoading,
  } = passoverPropObj;
  const posterUrl = poster
    ? `${imgUrlTemplateForW300}/${poster}`
    : posterReplacementImgForImgSize300;

  return (
    <article className="preview-article">
      <Badge
        sx={{ ...styleBadge }}
        badgeContent={voteAvg}
        color={voteAvg > 5 ? "primary" : "secondary"}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Card sx={{ ...styleCard }}>
          <CardMedia
            component="img"
            height="140"
            image={posterUrl}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              sx={{ display: "flex", justifyContent: "space-between" }}
              variant="body2"
              color="text.secondary"
            >
              <span>{mediaTypeText}</span> <span>{date}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <DetailContent
              id={id}
              mediaType={mediaType}
              extraQueryStrForDetailReq={extraQueryStrForDetailReq}
              setLoading={setLoading}
            ></DetailContent>
          </CardActions>
        </Card>
      </Badge>
    </article>
  );
};

export default PreviewContent;
