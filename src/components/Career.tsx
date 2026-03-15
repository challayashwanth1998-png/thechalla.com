import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Hewlett Packard Enterprise</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Designed real-time data pipelines (Kafka, NiFi) to process 400GB of daily data. 
              Built ETL solutions for semi-structured data using Hadoop, Hive, and HBase. 
              Optimized QlikSense dashboards, reducing report generation time by 85%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Data Analyst</h4>
                <h5>Institute of Insight, GSU</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed algorithms to quantify ethics risks from earnings calls. 
              Analyzed social data (Reddit/Twitter) using NLP and deep learning (CNN/PyTorch). 
              Quantified supply chain risks using proprietary Word2Vec models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Insurance Masters LLC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected multi-agent RAG systems and Text-to-SQL engines. 
              Implemented "LLM-as-a-Judge" evaluation frameworks. 
              Developed low-latency Voice AI renewal agents using LiveKit and WebRTC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
