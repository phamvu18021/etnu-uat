import { LayoutPost } from "@/layouts/layoutPost";

export default function PostLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <LayoutPost>{children}</LayoutPost>;
}
