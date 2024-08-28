import type { Metadata } from "next";
import "./globals.css";
import { TaskList } from "@/components/index";

export const metadata: Metadata = {
  title: "ToDoApp",
  description: "Project design by NextJS + NodeJS + JSON Server + DaisyUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="my-10 mx-auto max-w-2xl">
        <div>{children}</div>
        <div>
          <TaskList />
        </div>
      </body>
    </html>
  );
}
