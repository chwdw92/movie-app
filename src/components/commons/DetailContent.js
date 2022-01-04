// have not worked on this part: not the requirement for the interview project

import { useState } from "react";
import axios from "axios";
import { Divider, Stack, styled, Paper } from "@mui/material";
import {
    detailsBaseUrl,
    imgUrlTemplateForW500,
    posterReplacementImgForImgSize500,
  } from "../../helpers/constants";
import TransitionModal from "./layouts/TransitionModal";


const DetailContent = ({
  id,
  mediaType,
  extraQueryStrForDetailReq,
  setLoading,
}) => {
  const detailUrl =
    detailsBaseUrl.replace("%mediaType%", mediaType).replace("%id%", id) +
    extraQueryStrForDetailReq;

  const [content, setContent] = useState(null);

  const fetchContentInDetail = async (modalOpenFunc) => {
        
  };

  return (
    <TransitionModal>
      
    </TransitionModal>
  );
};

export default DetailContent;
