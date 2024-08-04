import { appInfo } from "@/app/config/appinfo";

import type { School } from "./clientPage";
import AdminDashboard from "./clientPage";

export default async function AdminDashboardWrapper() {
  const response = await fetch(`${appInfo.apiDomain}/api/v1/get-schools`);
  const data = await response.json();
  const schools: School[] = data.schools;

  return <AdminDashboard schools={schools} />;
}
