import React, { Component } from "react";
import Header from "../../components/header/Header";
import SurahRead from "../../components/surahRead/SurahRead";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  let { surahId } = useParams();
  console.log(surahId);
  return (
    <>
      <Header urlPage="alquran" />
      <SurahRead />
    </>
  );
};

export default DetailPage;
