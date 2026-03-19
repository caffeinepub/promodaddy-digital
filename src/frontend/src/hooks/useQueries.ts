import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ContactSubmission, Service, SiteStat } from "../backend";
import { useActor } from "./useActor";

const DEFAULT_SERVICES: Service[] = [
  {
    id: 1n,
    name: "SEO Optimization",
    description:
      "Rank higher on Google with our proven SEO strategies. We drive organic traffic that converts.",
    icon: "🔍",
    category: "search",
  },
  {
    id: 2n,
    name: "Google Ads",
    description:
      "Maximize ROI with highly targeted Google Ad campaigns that put you in front of ready buyers.",
    icon: "📢",
    category: "ads",
  },
  {
    id: 3n,
    name: "YouTube Ads",
    description:
      "Reach millions of viewers with compelling video ad campaigns on India's #1 video platform.",
    icon: "▶️",
    category: "video",
  },
  {
    id: 4n,
    name: "Social Media Management",
    description:
      "Build a powerful social presence across Instagram, Facebook, and LinkedIn with our expert team.",
    icon: "📱",
    category: "social",
  },
  {
    id: 5n,
    name: "Brand Building",
    description:
      "Create a memorable brand identity that resonates with your target audience and stands out.",
    icon: "✨",
    category: "branding",
  },
  {
    id: 6n,
    name: "Lead Generation",
    description:
      "Fill your sales pipeline with qualified leads using our multi-channel lead generation system.",
    icon: "🎯",
    category: "leads",
  },
];

const DEFAULT_STATS: SiteStat[] = [
  { id: 1n, textLabel: "Projects Completed", value: "500+" },
  { id: 2n, textLabel: "5-Star Reviews", value: "160+" },
  { id: 3n, textLabel: "Google Rating", value: "5.0" },
  { id: 4n, textLabel: "Years of Experience", value: "8+" },
];

export function useServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return DEFAULT_SERVICES;
      const result = await actor.getAllServices();
      return result.length > 0 ? result : DEFAULT_SERVICES;
    },
    enabled: !!actor && !isFetching,
    placeholderData: DEFAULT_SERVICES,
  });
}

export function useStats() {
  const { actor, isFetching } = useActor();
  return useQuery<SiteStat[]>({
    queryKey: ["stats"],
    queryFn: async () => {
      if (!actor) return DEFAULT_STATS;
      const result = await actor.getAllStats();
      return result.length > 0 ? result : DEFAULT_STATS;
    },
    enabled: !!actor && !isFetching,
    placeholderData: DEFAULT_STATS,
  });
}

export function useSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery<ContactSubmission[]>({
    queryKey: ["submissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceInterest: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceInterest,
      );
    },
  });
}

export function useAddService() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      description: string;
      icon: string;
      category: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.addService(
        data.name,
        data.description,
        data.icon,
        data.category,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
}
