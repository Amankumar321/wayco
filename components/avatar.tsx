import React from "react"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
  className?: string
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className, ...props }, ref) => {
  return (
    <div
      className={`relative flex shrink-0 overflow-hidden rounded-full bg-muted ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Avatar.displayName = "Avatar"
