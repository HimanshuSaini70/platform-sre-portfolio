export const profile = {
  name: "Himanshu Saini",
  role: "DevOps · SRE · Platform Engineer",
  location: "India",
  phone: "+91 70005 33408",
  email: "manshu48@gmail.com",
  linkedin: "https://linkedin.com/in/himanshusaini70",
  github: "https://github.com/HimanshuSaini70",
  resume: "/Himanshu_Saini_Resume.pdf",
  summary:
    "I take production from first commit to quiet nights: clusters, pipelines, identity, cost, and compliance. Three years of owning the full path — not handing it off at the YAML.",
};

export const metrics = [
  {
    value: "$4,000",
    unit: "/ month",
    label: "AWS spend recovered at Axis Bank",
    detail: "15% reduction while holding 99.9% uptime across 50+ production servers",
  },
  {
    value: "40%",
    unit: "faster",
    label: "Mean time to recover",
    detail: "Dynatrace APM plus Prometheus/Grafana on mission-critical banking APIs",
  },
  {
    value: "45%",
    unit: "gain",
    label: "Deployment efficiency",
    detail: "Jenkins + Argo CD for Dockerized microservices; 70% less manual toil",
  },
  {
    value: "99.9%",
    unit: "uptime",
    label: "Production reliability",
    detail: "Reserved/Spot mix, auto-scaling, and 24×7 checks with Slack signal",
  },
];

export const ownership = [
  {
    step: "01",
    title: "Design the path",
    copy: "GKE and EKS topologies, Helm charts from zero, IAM least privilege, DNS, and certificates — the platform is a product, not a ticket queue.",
  },
  {
    step: "02",
    title: "Automate the path",
    copy: "Jenkins, GitHub Actions, and Argo CD as GitOps. CAB-aware promotions. New services leave my desk with a pipeline, not a runbook of hope.",
  },
  {
    step: "03",
    title: "Secure the path",
    copy: "SSO/SAML, Cloud Armor, SonarQube, Trivy, Vault. SOC2 and banking controls treated as architecture, not an audit week scramble.",
  },
  {
    step: "04",
    title: "Keep the path honest",
    copy: "Prometheus, Grafana, GCP Monitoring, Dynatrace. Cert expiry Slack, uptime probes, scoped AI troubleshooting — I own the 2 a.m. page.",
  },
];

export const caseStudies = [
  {
    id: "axis",
    kicker: "Axis Bank · 2023–2026",
    title: "Reliability and cost as one ownership surface",
    lede: "India’s third-largest private bank. I treated 50+ production servers as a system: observe it, shrink it, secure it, and ship to it without theatre.",
    impact: [
      { stat: "$4k/mo", note: "AWS recovered via right-sizing, ASG, Reserved & Spot" },
      { stat: "30%", note: "less infrastructure downtime" },
      { stat: "40%", note: "lower MTTR with Dynatrace APM" },
      { stat: "30%", note: "fewer security incidents after DevSecOps gates" },
    ],
    narrative: [
      "Monitoring was not a dashboard hobby. Dynatrace, Prometheus, and Grafana were wired to SLA for mission-critical banking applications — downtime dropped 30%.",
      "CI/CD for Dockerized microservices on Kubernetes (Jenkins + Argo CD) raised deployment efficiency 45% and cut manual effort 70%.",
      "SonarQube, Trivy, and IAM policy work reached 100% compliance with banking standards. Cost work never traded away the 99.9% uptime line.",
    ],
    stack: ["AWS", "EKS", "Jenkins", "Argo CD", "Dynatrace", "Prometheus", "Grafana", "SonarQube", "Trivy"],
  },
  {
    id: "wiz",
    kicker: "WizCommerce · 2026–Present",
    title: "GitOps, identity, and SOC2 for a B2B SaaS platform",
    lede: "A commerce platform that needed production to feel boring: one identity plane, one promotion path, one place to see the truth.",
    impact: [
      { stat: "SOC2", note: "org-wide SSO (SAML/OAuth) as the control plane" },
      { stat: "GitOps", note: "Jenkins + Argo CD, Helm charts owned from scratch" },
      { stat: "WAF", note: "GCP Cloud Armor on the public edge" },
      { stat: "0", note: "cert-expiry surprises — Slack before the clock runs out" },
    ],
    narrative: [
      "I own end-to-end deployment architecture: GKE for production, Helm for new services, OpenVPN for a clean remote path.",
      "Least-privilege GCP IAM, Google Managed Certificates plus GoDaddy/Route 53 DNS, and 24×7 uptime checks into Slack.",
      "MCP and LLM-based troubleshooting sits behind scoped read-only access — acceleration without a new blast radius.",
    ],
    stack: ["GCP", "GKE", "Helm", "Argo CD", "Jenkins", "Cloud Armor", "Cloud IAM", "Prometheus", "Grafana"],
  },
  {
    id: "zero-trust",
    kicker: "Lab · Jan 2025",
    title: "Bare-metal Kubernetes with Zero Trust",
    lede: "No inbound ports. Encryption on the overlay. A cluster that assumes the network is hostile.",
    impact: [
      { stat: "0", note: "inbound ports via Cloudflare Tunnel" },
      { stat: "ZT", note: "Tailscale + Calico on multi-node bare metal" },
    ],
    narrative: [
      "Multi-node Kubernetes on metal with Calico CNI, Tailscale encryption, and Cloudflare Tunnel. Prometheus/Grafana with public dashboards. Install scripts written to survive restarts.",
    ],
    stack: ["Kubernetes", "Calico", "Tailscale", "Cloudflare", "Prometheus", "Grafana"],
  },
  {
    id: "mern-aws",
    kicker: "Lab · Jan 2025",
    title: "MERN on AWS, fully automated",
    lede: "Days of snowflake setup compressed into a repeatable two-hour path — and drift taken off the table.",
    impact: [
      { stat: "50%", note: "faster provisioning with Terraform" },
      { stat: "<2h", note: "environment standup vs days of click-ops" },
    ],
    narrative: [
      "Terraform for the estate. EKS, ALB Ingress, Route 53, ACM with automated renewal. Jenkins and Argo CD for promotion. One shape for dev, staging, and production.",
    ],
    stack: ["Terraform", "EKS", "Jenkins", "Argo CD", "Route 53", "ACM"],
  },
];

export const stack = [
  {
    group: "Cloud",
    items: ["AWS (EC2, EKS, S3, IAM, VPC, Route 53)", "GCP (GKE, IAM, Cloud Armor, DNS, Monitoring, Storage)"],
  },
  {
    group: "Platform",
    items: ["Kubernetes", "Helm", "Docker", "Cert Manager", "Microservices"],
  },
  {
    group: "Delivery",
    items: ["Jenkins", "GitHub Actions", "Argo CD", "GitOps", "CAB workflows"],
  },
  {
    group: "IaC & secrets",
    items: ["Terraform", "Helm", "HashiCorp Vault"],
  },
  {
    group: "Observe",
    items: ["Prometheus", "Grafana", "Dynatrace", "GCP Monitoring", "APM"],
  },
  {
    group: "Security",
    items: ["SSO/SAML", "SOC2", "SonarQube", "Trivy", "OWASP", "Cloud Armor", "Least-privilege IAM"],
  },
];

export const experience = [
  {
    company: "WizCommerce",
    role: "DevOps Engineer",
    dates: "Apr 2026 — Present",
    place: "Gurugram · B2B e-commerce SaaS",
  },
  {
    company: "Axis Bank",
    role: "DevOps Engineer",
    dates: "Aug 2023 — Mar 2026",
    place: "Mumbai · India’s 3rd largest private bank",
  },
];

export const credentials = [
  "AWS Certified DevOps Engineer — Professional",
  "Google Professional Cloud Architect",
  "B.Tech Computer Science, SRIT Jabalpur · CGPA 8.2/10",
];
