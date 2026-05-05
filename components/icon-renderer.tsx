import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconRendererProps extends LucideProps {
  iconName: string;
}

export function IconRenderer({ iconName, ...props }: IconRendererProps) {
  const Icon = (LucideIcons as any)[iconName];

  if (!Icon) {
    return <LucideIcons.HelpCircle {...props} />;
  }

  return <Icon {...props} />;
}
