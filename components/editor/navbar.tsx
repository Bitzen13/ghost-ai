"use client"

import { PanelLeftOpen, PanelLeftClose } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
  className?: string
}

export function Navbar({ sidebarOpen, onToggleSidebar, className }: NavbarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 h-12 flex items-center",
        "bg-surface border-b border-border-default",
        className
      )}
    >
      <div className="flex items-center px-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="h-8 w-8 rounded-none text-text-muted hover:text-text-primary hover:bg-elevated"
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex-1" />

      <div className="px-3" />
    </header>
  )
}
