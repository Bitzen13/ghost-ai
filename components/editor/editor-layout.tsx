"use client"

import { useState } from "react"
import { Navbar } from "./navbar"
import { Sidebar } from "./sidebar"

interface EditorLayoutProps {
  children?: React.ReactNode
}

export function EditorLayout({ children }: EditorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-base">
      <Navbar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="pt-12">{children}</main>
    </div>
  )
}
