import { Container, Row, Col } from 'react-bootstrap';

export default function MoveWithMeSection() {
  return (
    <section
      id="move-with-me"
      className="w-full pt-[200px] max-lg:pt-[100px] max-md:pt-[80px] max-sm:pt-[40px] bg-black flex flex-col items-center gap-[100px] max-lg:gap-[60px] max-md:gap-[40px]"
    >
      {/* TOP TEXT PANEL */}
      <Container className="z-[1]  mb-5 ">
        <Row className="justify-center">
          <Col lg={10} md={11} sm={12}>
            <div className="flex flex-col gap-[32px] text-left text-white">
              <h1 className="font-[helvetica-neue] font-black text-[100px] max-lg:text-[72px] max-md:text-[54px] max-sm:text-[36px] leading-tight uppercase">
                Run with me
              </h1>

              <h2 className="font-[helvetica-neue] text-[18px] max-lg:text-[16px] max-sm:text-[14px] text-text-light max-w-[70%] max-lg:max-w-full">
                Ready to start your running journey? Whether it’s your first 5K
                or your first ultra, I’ll guide you every step of the way”?
              </h2>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CLIMB + TRAIN PANELS */}
      <Container fluid className="p-0 z-[1]">
        <Row className="g-0">{/* CLIMB WITH ME */}</Row>
      </Container>
    </section>
  );
}
