import React from "react";
import styled from "styled-components";
import TestimonialBox from "../Elements/TestimonialBox";
//Assets
import TestiImage1 from "../../assets/img/photos/florian.jpeg";
import TestiImage2 from "../../assets/img/photos/suryani.jpeg";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Apa Kata Mereka?</h1>
            <p className="font13">
              Bapak, Ibu, Kakak pasti penasaran ya dengan testimoni dari para
              peserta BCM sebelumnya?
              <br />
              Yuk baca beberapa testimoni di bawah~
            </p>
          </HeaderInfo>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Lewat BCM, saya diingatkan kembali untuk belajar bertumbuh menjadi pribadi yang dewasa secara rohani. Lewat SHDRK saya mengalami cinta mula mula dengan Tuhan, dan lewat seminar BCM ini saya semakin diingatkan untuk lebih mengasihi Tuhan, mengatasi kedagingan kedagingan dan kelemahan saya, serta semakin bertumbuh dewasa secara rohani. Bagi bapak ibu yang sudah pernah mengikuti SHDRK, seminar ini sangat baik sebagai seminar lanjutan setelah SHDRK. Semoga kita semua dapat semakin bertumbuh dewasa secara rohani. GBU."
                author="Florian"
                img={TestiImage1}
              />
            </LogoWrapper>
          </div>
          <div className="flexCenter">
            <LogoWrapper>
              <TestimonialBox
                text="Pertama kali saya mengikuti seminar BCM, saya mendapatkan sesuatu yg baru. 
                Saya menyadari bahwa Tuhan mengasihi saya, dan saya mau lebih lagi mencintai Tuhan melalui sikap saya memandang persoalan , percaya dan berserah pada rencana Tuhan yang terbaik utk hidup saya, dalam keluarga, saya belajar lebih sabar dalam mendidik anak anak . 
                Melalui Seminar BCM, mengajar saya utk lebih bijaksana dan lebih dewasa secara rohani.  Ayo teman teman , ikuti seminar ini. Tuhan memberkati kita semua."
                author="Bu Suryani"
                img={TestiImage2}
              />
            </LogoWrapper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  width: 90%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
