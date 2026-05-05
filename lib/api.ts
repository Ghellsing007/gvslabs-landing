const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const result = await response.json();
  return result.data;
}

export const gvslabsApi = {
  getConfig: () => fetcher<any>("/gvslabs/config"),
  getServices: () => fetcher<any[]>("/gvslabs/services"),
  getProjects: () => fetcher<any[]>("/gvslabs/projects"),
  getTestimonials: () => fetcher<any[]>("/gvslabs/testimonials"),
};
