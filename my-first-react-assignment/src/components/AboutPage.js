const AboutPage = () => {
  return (
    <div className="container">
      <h2>Who am I?</h2>
      <div className="row">
        <div className="col">
          <div className="card h-100 text-dark">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">My Background</h5>
              <p className="card-text">
                I am currently working as a teacher in Sweden, and it is really
                something that I enjoy. However, I feel that my development in
                this field is somewhat limited. I do want to strive for a field
                where I constantly can challenge myself further.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-dark">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327493_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Yes, I will be good Dev</h5>
              <p className="card-text">
                When I was thinking about changing my career path to web
                development, the question was, “Am I a good fit for web
                development?”. But after analyzing my strengths and motives, I
                realized that I would be a good developer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-dark">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">This is me</h5>
              <p className="card-text">
                I possess a pleasant, friendly, hard-working and cheerful
                personality. I also have good communication skills and the
                ability and willingness to take on responsibilities. I am an
                active contributor and participator as a team player and perform
                duties under minimal supervision, managing time effectively to
                meet objectives and deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
