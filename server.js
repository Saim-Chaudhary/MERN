import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// MERN Learning Roadmap Data
const roadmapData = {
  currentLevel: "ES6 JavaScript",
  phases: [
    {
      id: 1,
      phase: "Phase 1: Advanced JavaScript & Node.js Basics",
      duration: "2-3 weeks",
      completed: false,
      topics: [
        {
          name: "Advanced ES6+ Features",
          subtopics: ["Destructuring", "Spread/Rest", "Modules", "Promises", "Async/Await"],
          parallel: true,
          groupId: "js-advanced",
          resources: [
            { title: "JavaScript.info - Modern JavaScript", url: "https://javascript.info/", type: "📖 Tutorial", description: "Crystal clear explanations with examples" },
            { title: "freeCodeCamp ES6", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/", type: "🎮 Interactive", description: "Learn by doing with instant feedback" },
            { title: "Web Dev Simplified - Async/Await", url: "https://www.youtube.com/c/WebDevSimplified", type: "🎥 Video", description: "Short, simple video tutorials" }
          ]
        },
        {
          name: "DOM Manipulation",
          subtopics: ["Events", "DOM Traversal", "Dynamic Content"],
          parallel: true,
          groupId: "js-advanced",
          resources: [
            { title: "JavaScript.info - DOM", url: "https://javascript.info/document", type: "📖 Tutorial", description: "Easy to follow DOM guide" },
            { title: "Traversy Media - DOM Crash Course", url: "https://www.youtube.com/c/TraversyMedia", type: "🎥 Video", description: "Practical examples explained simply" }
          ]
        },
        {
          name: "Node.js Fundamentals",
          subtopics: ["NPM", "Modules", "File System", "Events"],
          parallel: false,
          groupId: "node-basics",
          resources: [
            { title: "Node.js Official Tutorial", url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs", type: "📖 Tutorial", description: "Official beginner-friendly guide" },
            { title: "freeCodeCamp Node.js Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", type: "🎥 Video", description: "Complete course with simple explanations" },
            { title: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices", type: "📚 Guide", description: "Easy-to-read best practices" }
          ]
        }
      ]
    },
    {
      id: 2,
      phase: "Phase 2: Express.js & REST APIs",
      duration: "2-3 weeks",
      completed: false,
      topics: [
        {
          name: "Express.js Basics",
          subtopics: ["Routing", "Middleware", "Request/Response"],
          parallel: false,
          groupId: "express-basics",
          resources: [
            { title: "Express.js Official Guide", url: "https://expressjs.com/en/starter/installing.html", type: "📖 Tutorial", description: "Clear and concise official docs" },
            { title: "freeCodeCamp Express Course", url: "https://www.youtube.com/watch?v=-MTSQjw5DrM", type: "🎥 Video", description: "Step-by-step beginner course" },
            { title: "MDN Express Tutorial", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs", type: "📖 Tutorial", description: "Well-structured learning path" }
          ]
        },
        {
          name: "REST API Design",
          subtopics: ["HTTP Methods", "Status Codes", "API Structure"],
          parallel: true,
          groupId: "api-design",
          resources: [
            { title: "REST API Tutorial", url: "https://restfulapi.net/", type: "📖 Tutorial", description: "Simple REST concepts explained" },
            { title: "Traversy Media - REST API", url: "https://www.youtube.com/watch?v=Q-BpqyOT3a8", type: "🎥 Video", description: "Practical REST API explained" },
            { title: "HTTP Status Codes", url: "https://httpstatuses.com/", type: "📚 Reference", description: "Easy status code reference" }
          ]
        },
        {
          name: "Postman & API Testing",
          subtopics: ["Testing Endpoints", "Environment Variables"],
          parallel: true,
          groupId: "api-design",
          resources: [
            { title: "Postman Learning Center", url: "https://learning.postman.com/", type: "📖 Tutorial", description: "Interactive Postman tutorials" },
            { title: "Postman Beginner Course", url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4", type: "🎥 Video", description: "Simple Postman walkthrough" }
          ]
        }
      ]
    },
    {
      id: 3,
      phase: "Phase 3: MongoDB & Database Integration",
      duration: "2-3 weeks",
      completed: false,
      topics: [
        {
          name: "MongoDB Basics",
          subtopics: ["CRUD Operations", "Queries", "Indexes"],
          parallel: false,
          groupId: "mongo-basics",
          resources: [
            { title: "MongoDB University (Free)", url: "https://learn.mongodb.com/", type: "📖 Course", description: "Free official courses, very beginner-friendly" },
            { title: "MongoDB Tutorial for Beginners", url: "https://www.youtube.com/watch?v=c2M-rlkkT5o", type: "🎥 Video", description: "Simple, hands-on MongoDB intro" },
            { title: "MongoDB Manual", url: "https://docs.mongodb.com/manual/", type: "📚 Docs", description: "Clear official documentation" }
          ]
        },
        {
          name: "Mongoose ODM",
          subtopics: ["Schemas", "Models", "Validations", "Relations"],
          parallel: false,
          groupId: "mongoose",
          resources: [
            { title: "Mongoose Official Docs", url: "https://mongoosejs.com/docs/guide.html", type: "📖 Tutorial", description: "Easy-to-follow Mongoose guide" },
            { title: "Net Ninja - Mongoose Tutorial", url: "https://www.youtube.com/watch?v=bxsemcrY4gQ", type: "🎥 Video", description: "Simplified Mongoose explained" },
            { title: "Mongoose Crash Course", url: "https://www.youtube.com/watch?v=DZBGEVgL2eE", type: "🎥 Video", description: "Quick practical overview" }
          ]
        },
        {
          name: "Database Design",
          subtopics: ["Schema Design", "Relationships", "Best Practices"],
          parallel: true,
          groupId: "db-design",
          resources: [
            { title: "MongoDB Schema Design", url: "https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design", type: "📖 Article", description: "Simple schema design rules" },
            { title: "Database Design Course", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc", type: "🎥 Video", description: "Clear database design concepts" }
          ]
        }
      ]
    },
    {
      id: 4,
      phase: "Phase 4: React Fundamentals",
      duration: "3-4 weeks",
      completed: false,
      topics: [
        {
          name: "React Basics",
          subtopics: ["Components", "JSX", "Props", "State"],
          parallel: false,
          groupId: "react-basics",
          resources: [
            { title: "React Official Tutorial", url: "https://react.dev/learn", type: "📖 Tutorial", description: "Best beginner resource - interactive!" },
            { title: "freeCodeCamp React Course", url: "https://www.youtube.com/watch?v=bMknfKXIFA8", type: "🎥 Video", description: "Complete course with simple examples" },
            { title: "Scrimba React Course (Free)", url: "https://scrimba.com/learn/learnreact", type: "🎮 Interactive", description: "Learn by coding in browser" },
            { title: "React for Beginners", url: "https://www.youtube.com/watch?v=SqcY0GlETPk", type: "🎥 Video", description: "Gentle introduction to React" }
          ]
        },
        {
          name: "Hooks",
          subtopics: ["useState", "useEffect", "useContext", "Custom Hooks"],
          parallel: false,
          groupId: "react-hooks",
          resources: [
            { title: "React Hooks Official Docs", url: "https://react.dev/reference/react", type: "📖 Tutorial", description: "Simple hooks explanation" },
            { title: "Web Dev Simplified - React Hooks", url: "https://www.youtube.com/watch?v=O6P86uwfdR0", type: "🎥 Video", description: "Each hook explained simply" },
            { title: "useHooks - Hook Recipes", url: "https://usehooks.com/", type: "📚 Reference", description: "Practical hook examples" }
          ]
        },
        {
          name: "React Router",
          subtopics: ["Routing", "Navigation", "Dynamic Routes"],
          parallel: true,
          groupId: "react-routing",
          resources: [
            { title: "React Router Tutorial", url: "https://reactrouter.com/en/main/start/tutorial", type: "📖 Tutorial", description: "Official easy-to-follow tutorial" },
            { title: "Net Ninja - React Router", url: "https://www.youtube.com/watch?v=Law7wfdg_ls", type: "🎥 Video", description: "Clear router walkthrough" }
          ]
        },
        {
          name: "Forms & Validation",
          subtopics: ["Controlled Components", "Form Handling", "Validation"],
          parallel: true,
          groupId: "react-forms",
          resources: [
            { title: "React Forms Guide", url: "https://react.dev/reference/react-dom/components/input", type: "📖 Tutorial", description: "Official forms documentation" },
            { title: "React Hook Form", url: "https://react-hook-form.com/", type: "📚 Library", description: "Simple form management" }
          ]
        }
      ]
    },
    {
      id: 5,
      phase: "Phase 5: Full Stack Integration",
      duration: "2-3 weeks",
      completed: false,
      topics: [
        {
          name: "API Integration",
          subtopics: ["Fetch/Axios", "Async State", "Error Handling"],
          parallel: false,
          groupId: "integration",
          resources: [
            { title: "Axios Documentation", url: "https://axios-http.com/docs/intro", type: "📖 Tutorial", description: "Simple HTTP client guide" },
            { title: "Fetch API Guide", url: "https://javascript.info/fetch", type: "📖 Tutorial", description: "Easy fetch examples" },
            { title: "React with APIs", url: "https://www.youtube.com/watch?v=Law7wfdg_ls", type: "🎥 Video", description: "Simple API integration tutorial" }
          ]
        },
        {
          name: "Authentication & Authorization",
          subtopics: ["JWT", "Sessions", "Protected Routes"],
          parallel: false,
          groupId: "auth",
          resources: [
            { title: "JWT.io Introduction", url: "https://jwt.io/introduction", type: "📖 Tutorial", description: "JWT explained simply" },
            { title: "MERN Auth Tutorial", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4", type: "🎥 Video", description: "Complete auth walkthrough" },
            { title: "Passport.js Guide", url: "http://www.passportjs.org/", type: "📚 Library", description: "Easy authentication library" }
          ]
        },
        {
          name: "State Management",
          subtopics: ["Context API", "Redux (Optional)"],
          parallel: true,
          groupId: "state-mgmt",
          resources: [
            { title: "React Context API", url: "https://react.dev/learn/passing-data-deeply-with-context", type: "📖 Tutorial", description: "Simple context explanation" },
            { title: "Redux Toolkit Tutorial", url: "https://redux-toolkit.js.org/tutorials/quick-start", type: "📖 Tutorial", description: "Modern Redux made easy" },
            { title: "Context vs Redux", url: "https://www.youtube.com/watch?v=5gUHfe-ETuo", type: "🎥 Video", description: "When to use what" }
          ]
        }
      ]
    },
    {
      id: 6,
      phase: "Phase 6: Advanced Topics & Deployment",
      duration: "2-3 weeks",
      completed: false,
      topics: [
        {
          name: "File Uploads",
          subtopics: ["Multer", "Cloud Storage"],
          parallel: true,
          groupId: "advanced-features",
          resources: [
            { title: "Multer Documentation", url: "https://github.com/expressjs/multer", type: "📖 Tutorial", description: "Simple file upload guide" },
            { title: "Cloudinary Guide", url: "https://cloudinary.com/documentation", type: "📚 Docs", description: "Easy cloud storage setup" },
            { title: "File Upload Tutorial", url: "https://www.youtube.com/watch?v=wIOpe8S2Mk8", type: "🎥 Video", description: "Step-by-step file uploads" }
          ]
        },
        {
          name: "Real-time Features",
          subtopics: ["Socket.io", "WebSockets"],
          parallel: true,
          groupId: "advanced-features",
          resources: [
            { title: "Socket.io Get Started", url: "https://socket.io/get-started/chat", type: "📖 Tutorial", description: "Build a chat app tutorial" },
            { title: "WebSockets Simplified", url: "https://www.youtube.com/watch?v=2Nt-ZrNP22A", type: "🎥 Video", description: "WebSockets explained simply" },
            { title: "Real-time MERN App", url: "https://www.youtube.com/watch?v=djMy4QsPWiI", type: "🎥 Video", description: "Complete real-time tutorial" }
          ]
        },
        {
          name: "Security Best Practices",
          subtopics: ["CORS", "Helmet", "Input Validation", "SQL Injection Prevention"],
          parallel: true,
          groupId: "security",
          resources: [
            { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "📚 Guide", description: "Security basics explained" },
            { title: "Node.js Security Best Practices", url: "https://nodejs.org/en/docs/guides/security/", type: "📖 Tutorial", description: "Official security guide" },
            { title: "Web Security Course", url: "https://www.youtube.com/watch?v=lhNTjlCdHzg", type: "🎥 Video", description: "Simple security concepts" }
          ]
        },
        {
          name: "Deployment",
          subtopics: ["Environment Variables", "Heroku/Render", "MongoDB Atlas", "Vercel/Netlify"],
          parallel: false,
          groupId: "deployment",
          resources: [
            { title: "Render Deployment Guide", url: "https://render.com/docs", type: "📖 Tutorial", description: "Free hosting, easy setup" },
            { title: "Vercel Deployment", url: "https://vercel.com/docs", type: "📖 Tutorial", description: "Quick frontend deployment" },
            { title: "MongoDB Atlas Setup", url: "https://www.mongodb.com/docs/atlas/getting-started/", type: "📖 Tutorial", description: "Free cloud database setup" },
            { title: "Full Stack Deployment", url: "https://www.youtube.com/watch?v=l134cBAJCuc", type: "🎥 Video", description: "Complete deployment tutorial" }
          ]
        }
      ]
    }
  ],
  learningTips: [
    "Build small projects after each phase to reinforce learning",
    "Topics marked as 'parallel' can be learned simultaneously",
    "Practice coding daily, even if just for 30 minutes",
    "Join MERN communities and forums for support",
    "Document your learning journey on GitHub"
  ],
  projectIdeas: [
    "Phase 1-2: Simple REST API (Todo, Notes)",
    "Phase 3: Blog API with MongoDB",
    "Phase 4-5: Full Stack Todo App",
    "Phase 6: Social Media Clone, E-commerce Platform"
  ]
};

// API Endpoints
app.get('/api/roadmap', (req, res) => {
  res.json(roadmapData);
});

app.get('/api/phase/:id', (req, res) => {
  const phase = roadmapData.phases.find(p => p.id === parseInt(req.params.id));
  if (phase) {
    res.json(phase);
  } else {
    res.status(404).json({ error: 'Phase not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 MERN Roadmap API ready!`);
});
