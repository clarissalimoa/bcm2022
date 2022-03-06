import React from "react";
import styled from "styled-components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  OrderedList,
  ListItem,
  Img,
} from "@chakra-ui/react";

import JadwalImage from "../../assets/img/photos/jadwal.jpg";

export default function About() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Tentang BCM</h1>
            <p className="font13">
              Oya, pasti Ibu, Bapak, Kakak bertanya-tanya mengenai BCM
              <br />
              <br />
              Kita baca detailnya di bawah ya!
            </p>
          </HeaderInfo>
          <br />
          <Accordion className="whiteBg" allowMultiple allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Apa itu BCM?</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Seminar BCM (Basic Christian Maturity) adalah seminar lanjutan
                dari Seminar Hidup dalam Roh Kudus (SHDR). Seminar BCM akan
                menjelaskan mengenai dasar-dasar bagaimana menjadi seorang
                Kristen yang dewasa dan membantu setiap murid Kristus untuk
                mengenal dan menerapkan prinsip-prinsip dasar guna bertumbuh di
                dalam kedewasaan hidup kristiani.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Kenapa harus ikut BCM? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Merupakan lanjutan dari SHDRK (Seminar Hidup Dalam Roh
                    Kudus)
                  </ListItem>
                  <ListItem>
                    Dalam SHDRK kita sudah mengalami pencurahan Roh Kudus dan
                    itu tidak berarti selesai sampai disitu.
                  </ListItem>
                  <ListItem>
                    Dalam kehidupan, banyak hal / masalah yang membuat kita
                    mungkin down bahkan menjauh dari Tuhan meskipun sudah
                    mengalami pencurahan Roh Kudus. Di dalam BCM, kita belajar
                    untuk tetap berakar, bertumbuh dan berbuah dalam Yesus.
                    Tetap menjaga api Roh Kudus di dalam diri kita dan bertumbuh
                    menuju kedewasaan rohani.
                  </ListItem>
                </OrderedList>
                Pencurahan Roh Kudus adalah suatu titik permulaan untuk hidup
                baru, tetapi kita harus terus bertumbuh menuju suatu kedewasaan
                rohani. Untuk terus tumbuh, kita perlu mengerti bagaimana
                caranya untuk tetap berakar, hidup dalam dunia dan komunitas
                Kristiani, mengatasi kedagingan dan kelemahan kelemahan kita,
                dan masih banyak lagi yang semua nya akan dijelaskan di dalam
                seminar ini.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Acara dilaksanakan secara online/offline? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Acara akan dilaksanakan secara ONLINE menggunakan Zoom Meeting.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Berapa biaya pendaftaran? </b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Biaya pendaftaran BCM sebesar <b> Rp 25.000,-</b> dengan rincian
                sebagai pengganti buku. Pembayaran hanya via BCA 1681105404 an
                Engdah Hasjim.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b> Bagaimana jadwal BCM?</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Berikut ini adalah jadwal BCM 2022
                <Img
                  className="radius8"
                  src={JadwalImage}
                  alt="office"
                  style={{ zIndex: 9, width: "95%", alignItems: "end" }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
