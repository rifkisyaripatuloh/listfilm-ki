import { Card, Container, Row, Col, Image } from "react-bootstrap";
import valakImage from "../assets/images/horor/valak.jpg";
import qodratImage from "../assets/images/horor/qodrat.jpeg";
import conjuringImage from "../assets/images/horor/conjuring2.jpg";
import evilImage from "../assets/images/horor/EVIL.jpg";
import pengabdiImage from "../assets/images/horor/pengabdi.webp";
import insidiusImage from "../assets/images/horor/INSIDIOUS.webp";

const HOROR = () => {
  return (
    <div data-aos="fade-up-right">
      <Container>
        <br />
        <h1 className="text-white">HOROR MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="horor">
            <Card className="movieImage">
              <Image src={valakImage} alt="valak" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE NUN 2</Card.Title>
                  <Card.Text className="text-left">
                    Berlatar tahun 1956, bermula dari pembunuhan seorang
                    pendeta, Suster Irene (Taissa Farmiga) sekali lagi
                    berhadapan dengan kekuatan jahat yang sangat besar, Valak
                    sang biarawati iblis demi kedamaian hidupnya serta
                    orang-orang di sekitarnya.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={qodratImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">QODRAT</Card.Title>
                  <Card.Text className="text-left">
                    Berpuluh tahun menggunakan ilmu ruqyah untuk menolong orang,
                    USTADZ QODRAT gagal meruqyah anaknya sendiri, ALIF
                    AL-FATHANAH yang dirasuki setan bernama ASSUALA.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={conjuringImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    THE CONJURING 2
                  </Card.Title>
                  <Card.Text className="text-left">
                    Pada tahun 1976, penyelidik paranormal Ed dan Lorraine
                    Warren menyelidiki pembunuhan Amityville di rumah
                    Amityville, untuk menentukan apakah kehadiran setan
                    benar-benar bertanggung jawab atas Ronald DeFeo Jr. membunuh
                    seluruh keluarganya pada 13 November 1974, dan insiden
                    menghantui yang melibatkan keluarga Lutz.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={evilImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    EVIL DEAD RISE
                  </Card.Title>
                  <Card.Text className="text-left">
                    Evil Dead Rise menceritakan kisah mengejutkan tentang dua
                    saudara perempuan yang terasing yang reuninya dipersingkat
                    oleh munculnya setan yang merasuki manusia, mendorong mereka
                    ke dalam pertempuran utama untuk bertahan hidup saat mereka
                    menghadapi versi keluarga paling mengerikan yang bisa
                    dibayangkan.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={pengabdiImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    PENGABDI SETAN 2
                  </Card.Title>
                  <Card.Text className="text-left">
                    Beberapa tahun setelah berhasil menyelamatkan diri dari
                    kejadian mengerikan yang membuat mereka kehilangan ibu dan
                    si bungsu Ian, Rini dan adik-adiknya, Toni dan Bondi, serta
                    Bapak tinggal di rumah susun karena percaya tinggal di rumah
                    susun aman jika terjadi sesuatu karena ada banyak orang.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={insidiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    INSIDIOUS THE RED DOORS
                  </Card.Title>
                  <Card.Text className="text-left">
                    Berlatar 10 tahun setelah film keempat, seri kelima akan
                    berkisah tentang usaha keluarga Lambert, Josh (Patrick
                    Wilson), Renai (Rose Byrne) dan anaknya yang sudah dewasa,
                    Dalton (Ty Simpkins) mencari tahu kenapa keluarga mereka
                    kembali dianggu oleh sosok arwah.
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

export default HOROR;
