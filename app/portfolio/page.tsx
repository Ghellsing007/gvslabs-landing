import Portfolio from "@/components/portfolio"
import { gvslabsApi } from "@/lib/api"

export default async function PortfolioPage() {
  const projects = await gvslabsApi.getProjects().catch(() => []);

  return (
    <main className="min-h-screen">
      <Portfolio initialProjects={projects} />
    </main>
  )
}