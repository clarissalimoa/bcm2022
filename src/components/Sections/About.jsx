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
                    Merupakan lanjutan dari SHDRK (Seminar Hidup Dalam Roh Kudus
                    ){" "}
                  </ListItem>
                  <ListItem>
                    Dalam SHDRK kita sudah mengalami pencurahan RK dan itu tidak
                    berarti selesai sampai disitu.
                  </ListItem>
                  <ListItem>
                    Dalam kehidupan banyak hal / masalah yang membuat kita
                    mungkin down bahkan jauh dari Tuhan meskipun sudah
                    dicurahkan RK. Nah dlm BCM ada sesi-sesi utk tetap berakar,
                    bertumbuh dan berbuah dalam Yesus
                  </ListItem>
                </OrderedList>
                Pembaharuan Karismatik dalam Gereja telah membawa banyak berkat
                bagi orang beriman. Pengalaman Pencurahan ROh Kudus telah
                membawa pertobatan dan pembaharuan hidup dalam diri banyak
                sekali orang Kristen. Banyak hidup yang di perbaharui, di ubah
                oleh penalam Roh Kudus yang diberikan Allah secara
                berlimpah-limpah kepada umat-Nya yang mau membuka hati. Hal itu
                sungguh merupakan suatu berkat bagi Gereja dan dunia.
                <br />
                Namun Pencurahan Roh Kudus bukanlah puncak dari pembaharuan yang
                dihadirkan oleh Roh Kudus dalam Gereja. Pencurahan hanyalah
                merupakan suatu permulaan. Memang, suatu pengalaman rohani yang
                berdaya kekuatan besar dan mampu mengubah dan memperbaharui
                hidup orang. Namun tak dapat disangkal bahwa itu barulah
                permulaannya saja. Bila orang melihat pencurahan Roh Kdus hanya
                sebagi suatu pengalaman yang terpisah, lepas dari suatu
                penggilan hitup tertentu, kekuatannya akan cepat hilang dalam
                rutinitas kehidupan sehari-hari. Karena itu pencurahan Roh Kudus
                haruslah di lihat sebagai suatu panggilan untuk menempuh suatu
                cara hidup baru, dengan suatu kesadaran baru akan kehadiran baru
                Roh Kudus dalam diri kita. Dengan kata lain, pencurahan adalah
                suatu panggilan untuk hidup dalam Roh, suatu hidup yang
                bersandar pada kuasa Roh Kudus dan aktivitasnya, suatu hidup
                yang ditandai oleh bimbinganNya.
                <br />
                Pencurahan Roh Kudus adalah suatu titik permulaan untuk hidup
                baru tersebut dan kita harus terus bertumbuh menuju suatu
                kedewasaan rohani. Untuk terus tumbuh, kita memerlukan
                pengertian yang tepat tentang dinamika hidup dalam Roh tersebut
                serta segala persyaratannya. Harus digambarkan dengan jelas apa
                tujuan yang ingin kita capai dan bagaimana selanjutnya proses
                perjalanan kita serta sarana-sarana yang di perlukan.
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
                sebagai pengganti buku.
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
