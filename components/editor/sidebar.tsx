"use client"

import { X, Plus, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 py-16 text-center">
      <FolderOpen className="h-8 w-8 text-text-faint" />
      <p className="text-sm text-text-muted">{label}</p>
    </div>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-12 left-0 bottom-0 z-50 w-72 flex flex-col",
        "bg-surface border-r border-border-default",
        "transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between px-4 h-11 border-b border-border-default shrink-0">
        <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
          Projects
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-7 w-7 rounded-none text-text-muted hover:text-text-primary hover:bg-elevated"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my" className="flex flex-col flex-1 overflow-hidden min-h-0">
        <TabsList
          variant="line"
          className="w-full rounded-none border-b border-border-default px-4 gap-4 justify-start h-10"
        >
          <TabsTrigger
            value="my"
            className="rounded-none px-0 text-xs font-medium"
          >
            My Projects
          </TabsTrigger>
          <TabsTrigger
            value="shared"
            className="rounded-none px-0 text-xs font-medium"
          >
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my" className="flex-1 overflow-hidden mt-0">
          <ScrollArea className="h-full">
            <EmptyState label="No projects yet" />
          </ScrollArea>
        </TabsContent>

        <TabsContent value="shared" className="flex-1 overflow-hidden mt-0">
          <ScrollArea className="h-full">
            <EmptyState label="No shared projects" />
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="p-4 border-t border-border-default shrink-0">
        <Button className="w-full rounded-none gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
