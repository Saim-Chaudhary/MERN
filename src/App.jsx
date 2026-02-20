import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPhases, setExpandedPhases] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '/api/roadmap';
    fetch(apiUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch roadmap');
        return res.json();
      })
      .then(data => {
        setRoadmap(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const toggleTopic = (phaseId, topicIdx) => {
    const key = `${phaseId}-${topicIdx}`;
    setExpandedTopics(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading your learning roadmap...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="container"><div className="error">Error: {error}</div></div>;
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>🎯 MERN Stack Learning Roadmap</h1>
          <p className="subtitle">Your Structured Path to Full Stack Mastery</p>
          <div className="current-level">
            <span className="badge">📍 Current Level: {roadmap.currentLevel}</span>
          </div>
        </div>
      </header>

      <div className="roadmap-content">
        <section className="phases">
          {roadmap.phases.map(phase => (
            <div key={phase.id} className={`phase-card ${expandedPhases[phase.id] ? 'expanded' : ''}`}>
              <div className="phase-header" onClick={() => togglePhase(phase.id)}>
                <div className="phase-info">
                  <h2>
                    <span className="phase-number">Phase {phase.id}</span>
                    <span className="phase-title">{phase.phase}</span>
                  </h2>
                  <span className="duration">⏱️ {phase.duration}</span>
                </div>
                <span className="expand-icon">{expandedPhases[phase.id] ? '▼' : '▶'}</span>
              </div>

              {expandedPhases[phase.id] && (
                <div className="phase-content">
                  <div className="topics-grid">
                    {phase.topics.map((topic, idx) => (
                      <div key={idx} className={`topic-card ${topic.parallel ? 'parallel' : 'sequential'}`}>
                        <div className="topic-header">
                          <h3>{topic.name}</h3>
                          {topic.parallel && (
                            <span className="parallel-badge">⚡ Parallel</span>
                          )}
                        </div>
                        <ul className="subtopics">
                          {topic.subtopics.map((subtopic, subIdx) => (
                            <li key={subIdx}>{subtopic}</li>
                          ))}
                        </ul>

                        {topic.resources && topic.resources.length > 0 && (
                          <div className="resources-section">
                            <button 
                              className="resources-toggle"
                              onClick={() => toggleTopic(phase.id, idx)}
                            >
                              📚 {expandedTopics[`${phase.id}-${idx}`] ? 'Hide' : 'Show'} Learning Resources ({topic.resources.length})
                            </button>

                            {expandedTopics[`${phase.id}-${idx}`] && (
                              <div className="resources-list">
                                {topic.resources.map((resource, rIdx) => (
                                  <a 
                                    key={rIdx} 
                                    href={resource.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="resource-item"
                                  >
                                    <div className="resource-header">
                                      <span className="resource-type">{resource.type}</span>
                                      <span className="resource-title">{resource.title}</span>
                                      <span className="external-icon">↗</span>
                                    </div>
                                    <p className="resource-description">{resource.description}</p>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        <aside className="sidebar">
          <div className="tips-card card-animated">
            <h3>💡 Learning Tips</h3>
            <ul className="tips-list">
              {roadmap.learningTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="projects-card card-animated">
            <h3>🚀 Project Ideas</h3>
            <ul className="projects-list">
              {roadmap.projectIdeas.map((project, idx) => (
                <li key={idx}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="legend-card card-animated">
            <h3>📖 Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-badge parallel">⚡</span>
                <span>Can be learned simultaneously</span>
              </div>
              <div className="legend-item">
                <span className="legend-badge sequential">→</span>
                <span>Learn sequentially</span>
              </div>
              <div className="legend-item">
                <span className="legend-badge resources">📚</span>
                <span>Click to see learning resources</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>💪 Total Duration: ~13-19 weeks | Daily practice recommended</p>
          <p>🌟 Remember: Everyone learns at their own pace. Adjust as needed!</p>
          <p className="footer-note">All resources are beginner-friendly with simple explanations</p>
        </div>
      </footer>
    </div>
  )
}

export default App
