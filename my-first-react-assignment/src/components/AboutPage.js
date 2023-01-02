const AboutPage = () => {
  return (
    <div className="Aboutme">
      <h1>Who am I?</h1>
      <div class="container" id="represntatives">
        <div class="row">
          <div class="col">
            <div class="card h-100 bg-warning text-dark">
              <img
                src="../../images/garden/cactus.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Cactus</h5>
                <p class="card-text">
                  {" "}
                  Precious but prickly, our collection of cacti at the zoo is
                  huge! They’re mesmerising not just because of their
                  interesting, often intimidating looking needles, but many also
                  bloom big, beautiful flowers. We’re officially listed as the
                  home of National Collections for three different species of
                  cacti (Copiapoa, Matucana and Turbinicarpus ), which we’re
                  really proud of!
                </p>

                <a
                  href="../../pages/garden/Cactus/index.html"
                  class="btn btn-success"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 bg-success text-dark">
              <img
                src=" ../../images/garden/nepenthes.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Nepenthes</h5>
                <p class="card-text">
                  We’re home to one of the largest collections of carnivorous
                  plants ever seen in the Sweden, with over 2000 plants. Many of
                  the 160 known species of nepenthes known to science are
                  already on the very edge of extinction. That’s why our
                  horticultural team is committed to protecting the future of
                  these incredible and varied species.
                </p>
                <a
                  href="../../pages/garden/nepenthes/index.html"
                  class="btn btn-warning"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
