import { Card, Container, Row, Col, Image } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/the batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const SuperHero = () => {
  
  return (
    <div data-aos="fade-up">
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANT MAN</Card.Title>
                  <Card.Text className="text-left">
                    Ant-Man (2015) mengisahkan perjalanan Scott Lang (Paul
                    Rudd), seorang narapidana yang 'dibebaskan' oleh Hank Pym
                    (Michael Douglas) untuk menjalani sebuah misi. Ia diberi
                    kesempatan menggunakan kostum superhero Ant-Man yang mampu
                    memanipulasi ukuran jadi sekecil semut.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    AVENGER ENDGAME
                  </Card.Title>
                  <Card.Text className="text-left">
                    Melanjutkan Avengers Infinity War, dimana kejadian setelah
                    Thanos berhasil mendapatkan semua infinity stones dan
                    memusnahkan 50% semua mahluk hidup di alam semesta. Akankah
                    para Avengers berhasil mengalahkan Thanos?
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE BATMAN</Card.Title>
                  <Card.Text className="text-left">
                    Ketika Riddler seorang pembunuh berantai yang sadis mulai
                    membunuh tokoh-tokoh politik penting di Gotham, Batman
                    dituntut untuk menyelidiki korupsi tersembunyi di kota itu
                    dan mempertanyakan keterlibatan keluarganya.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">
                    Robin Hood (Taron Egerton) sebagai tentara salib kembali ke
                    negerinya dalam keadaan yang berbeda. Ia menemukan pejabat
                    korup dan menghabiskan uang kerajaan sementara rakyat dalam
                    keadaan sengsara. Bersama Little John (Jamie Foxx) Ia
                    melawan tirani Inggris yang sangat kuat.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">
                    Pertama kalinya dalam sejarah layar lebar Spider-Man,
                    identitas asli dari pahlawan nan ramah ini terbongkar,
                    sehingga membuat tanggung jawabnya sebagai seorang
                    berkekuatan super berbenturan dengan kehidupan normalnya,
                    dan menempatkan semua orang terdekatnya dalam posisi paling
                    terancam.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN HERO</Card.Title>
                  <Card.Text className="text-left">
                    Man of Steel adalah film pahlawan super Amerika tahun 2013
                    yang disutradarai oleh Zack Snyder, diproduseri oleh
                    Christopher Nolan, dan ditulis oleh David S. Goyer. Film ini
                    menceritakan karakter DC Comics, Superman.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SuperHero;
