import { LayoutPost } from "@/layouts/layoutPost";

export default function PreviewLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <LayoutPost>{children}</LayoutPost>;
}
