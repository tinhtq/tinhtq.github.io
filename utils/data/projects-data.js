import genAiArchitect from "/public/image/project/genAI-Architecture.png";
import genAiWorkflow from "/public/image/project/genAi-Workflow.png";

export const projectsData = [
  {
    id: 1,
    name: "Architecture Diagram Generator",
    description:
      "My team and I built a web application that generates the architecture diagram of a software application from the input. It will create the CloudFormation template and the visualization for this architecture. This product brought our team to join the hackathon",
    tools: [
      "OpenSearch",
      "AWS Bedrock",
      "Streamlit",
      "FastAPI",
      "S3",
      "SQS",
      "DynamoDB",
      "Lambda",
      "Cognito",
      "API Gateway",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: [genAiArchitect, genAiWorkflow],
  },
  {
    id: 2,
    name: "NFT Game",
    description:
      "My team and I built a web application that generates the architecture diagram of a software application from the input. It will create the CloudFormation template and the visualization for this architecture.",
    tools: ["OpenSearch", "AWS Bedrock", "Streamlit", "FastAPI", "S3"],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: null,
  },
  {
    id: 3,
    name: "Centralized Monitoring",
    description:
      "My team and I built a web application that generates the architecture diagram of a software application from the input. It will create the CloudFormation template and the visualization for this architecture.",
    tools: ["OpenSearch", "AWS Bedrock", "Streamlit", "FastAPI", "S3"],
    role: "DevOps Engineer",
    code: "",
    demo: "",
    image: null,
  },
];
