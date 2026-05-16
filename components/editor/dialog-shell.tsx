import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface DialogShellProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  footer?: React.ReactNode
  children?: React.ReactNode
}

export function DialogShell({
  open,
  onOpenChange,
  title,
  description,
  footer,
  children,
}: DialogShellProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-none border-border-default bg-elevated">
        <DialogHeader>
          <DialogTitle className="text-text-primary">{title}</DialogTitle>
          {description && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>

        {children}

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}
