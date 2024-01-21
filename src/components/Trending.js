import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div data-aos="fade-up">
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                    Dune adalah film fiksi ilmiah tahun 2021 yang disutradarai
                    oleh Denis Villeneuve dan diproduseri oleh Mary Parent, Cale
                    Boyter, Joea racciolo Jr. dan Denis Villeneuve. Naskah film
                    ini ditulis oleh Jon Spaihts, Eric Roth dan Denis Villeneuve
                    berdasarkan novel Dune karya Frank Herbert.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    EVERYTHING EVERWHERE
                  </Card.Title>
                  <Card.Text className="text-left">
                    Everything Everywhere All At Once adalah petualangan yang
                    penuh aksi, sci-fi yang lucu dan berjiwa besar tentang
                    seorang wanita Cina-Amerika, Seorang imigran Tiongkok
                    terbawa dalam petualangan luar biasa, di mana dia sendiri
                    yang dapat menyelamatkan dunia.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text className="text-left">
                    Infinite Storm adalah sebuah film petualangan drama Amerika
                    Serikat tahun 2022 yang disutradarai oleh Małgorzata
                    Szumowska, disutradarai bersama oleh Michał Englert, dan
                    dengan skenario oleh Josh Rollins, berdasarkan artikel High.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                    Joker adalah film cerita seru psikologis Amerika Serikat
                    tahun 2019 yang disutradarai oleh Todd Phillips dan
                    diproduseri oleh Todd Philips, Bradley Cooper, dan Emma
                    Tillinger Koskoff.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                  <Card.Text className="text-left">
                    Lightyear adalah film aksi fiksi ilmiah animasi komputer
                    Amerika yang akan datang yang diproduksi oleh Pixar
                    Animation Studios dan Walt Disney Pictures dan
                    didistribusikan oleh Walt Disney Studios Motion Pictures.
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
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                    Ahli biokimia Michael Morbius (Jared Leto) mencoba
                    menyembuhkan dirinya sendiri dari penyakit darah langka,
                    namun secara tidak sengaja ia menginfeksi tubuhnya dan
                    berubah jadi mahluk yang menyerupai vampir.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
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

export default Trending;
