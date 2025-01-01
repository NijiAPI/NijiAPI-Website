import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { FaBook } from "react-icons/fa";

const Home: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<string>("Checking...");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [apiStats, setApiStats] = useState<any>(null);


  useEffect(() => {
    const fetchMaidImage = async () => {
      try {
        const response = await fetch('https://api.nijiapi.xyz/v1/maid', {
          headers: {
            'x-api-key': process.env.ADMIN_KEY!
          }
        });
        const data = await response.json();
        setImageUrl(data.imageURL)
      } catch (error) {}
    }
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.nijiapi.xyz/v1/stats', {
          headers: {
            'x-api-key': process.env.ADMIN_KEY!
          }
        });
        const data = await response.json();
        setApiStatus('API is online.')
        setApiStats(data);
      } catch (error) {}
    }
    fetchMaidImage();
    fetchStats();
  }, []);

  return (
    <div className="home">
      <section className="welcome">
        <div className="image-container">
          {imageUrl ? (
            <img src={imageUrl} alt="RandomImage" />
          ) : (
            <p>Loading image...</p>
          )}
          <div className={`api-status ${apiStatus.includes("online") ? "online" : "offline"}`}>
            {apiStatus}
          </div>
        </div>
        <div className="welcome-text">
          <h1>
            Welcome to <span className="rainbow-text glow-text">NijiAPI</span>
          </h1>
          <p>
          NijiAPI is a modern API offering images, advanced features and a simple interface for your projects. Discover various categories like Waifu, Husbando and much more!
          </p>
          <a href="https://docs.nijiapi.xyz" className="documentation-button">
            <FaBook /> See Documentation
          </a>
        </div>
      </section>
      <section className="live-stats">
        <h2>Live Stats</h2>
        {apiStats ? (
          <div className="stats">
            <div className="stat-item">
              <strong>Uptime:</strong> {apiStats.uptime}
            </div>
            <div className="stat-item">
              <strong>Requests:</strong> {apiStats.totalRequests}
            </div>
            <div className="stat-item">
              <strong>Users:</strong> {apiStats.totalUsers}
            </div>
          </div>
        ) : (
          <p>Loading statistics...</p>
        )}
      </section>
    </div>
  );
};

export default Home;
