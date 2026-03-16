import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI & ML)</h4>
                <h5>COER University, Roorkee</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science with a
              specialization in Artificial Intelligence and Machine Learning.
              Developed a strong foundation in programming, data structures,
              algorithms, probability, and machine learning fundamentals.
              Gained practical exposure to Python-based data science tools
              including NumPy, Pandas, and Scikit-learn while building
              real-world AI applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Projects</h4>
                <h5>Applied ML Development</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed multiple machine learning projects focused on solving
              real-world problems. Built a Fraud Detection System using
              classification algorithms to identify suspicious financial
              transactions. Implemented Synthetic Data Generation techniques to
              improve dataset quality and model performance. Worked extensively
              with Python, Scikit-learn, Pandas, and NumPy for data processing,
              feature engineering, model training, and evaluation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Deep Learning Exploration</h4>
                <h5>AI Research & Model Development</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Currently exploring deep learning and neural network architectures
              using frameworks such as TensorFlow and PyTorch. Working on
              projects involving neural networks, computer vision, and
              predictive modeling. Experimenting with CNN-based image
              classification models, deep learning optimization techniques, and
              real-world AI problem solving. Continuously expanding knowledge
              in advanced AI topics including deep neural networks, model
              generalization, and scalable AI system design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;