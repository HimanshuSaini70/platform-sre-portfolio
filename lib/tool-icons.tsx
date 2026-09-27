import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiArgo,
  SiCloudflare,
  SiDocker,
  SiDynatrace,
  SiGithubactions,
  SiGooglecloud,
  SiGrafana,
  SiHashicorp,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiSonarqubeserver,
  SiTailscale,
  SiTerraform,
  SiTrivy,
  SiVault,
} from "react-icons/si";

export type ToolIcon = {
  Icon: IconType;
  color: string;
};

// Real brand colors so each tool reads instantly, even before the label does.
const registry: Record<string, ToolIcon> = {
  aws: { Icon: FaAws, color: "#FF9900" },
  gcp: { Icon: SiGooglecloud, color: "#4285F4" },
  kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  eks: { Icon: SiKubernetes, color: "#326CE5" },
  gke: { Icon: SiKubernetes, color: "#326CE5" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  terraform: { Icon: SiTerraform, color: "#7B42BC" },
  jenkins: { Icon: SiJenkins, color: "#D24939" },
  "argo cd": { Icon: SiArgo, color: "#EF7B4D" },
  "argo cd · jenkins": { Icon: SiArgo, color: "#EF7B4D" },
  argocd: { Icon: SiArgo, color: "#EF7B4D" },
  prometheus: { Icon: SiPrometheus, color: "#E6522C" },
  grafana: { Icon: SiGrafana, color: "#F46800" },
  helm: { Icon: SiHelm, color: "#4C9FE0" },
  vault: { Icon: SiVault, color: "#FFD814" },
  sonarqube: { Icon: SiSonarqubeserver, color: "#4E9BCD" },
  trivy: { Icon: SiTrivy, color: "#5CC0DE" },
  "github actions": { Icon: SiGithubactions, color: "#2088FF" },
  cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  tailscale: { Icon: SiTailscale, color: "#8AD5EE" },
  dynatrace: { Icon: SiDynatrace, color: "#1496FF" },
  hashicorp: { Icon: SiHashicorp, color: "#000000" },
};

/** Loosely matches a stack-tag label ("EKS", "Argo CD", "GCP Monitoring") to a brand icon. */
export function getToolIcon(label: string): ToolIcon | null {
  const key = label.trim().toLowerCase();
  if (registry[key]) return registry[key];
  const found = Object.keys(registry).find((k) => key.includes(k));
  return found ? registry[found] : null;
}
