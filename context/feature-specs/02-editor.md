We need the base components that are used in every editor screen; the navbar and a floating sidebar.

### Navbar

Requirements:
- Fixed-height top navbar
- Left, Middle and Right sections.
- Left section contains sidebar toggle
- PanelLeftOpen / PanelLeftClosed icons for sidebar state
- right section empty for now
- thin border cleanly separating the navbar from the rest of the page.
- Sleek, minimalist, unique design
- No rounded corners
- Follows CSS design in globals.css

### Sidebar

Requirements:
- Sidebar floats above editor canvas
- Opening it should not push page content
- It should be toggleable with the button mentioned on the navbar
- Slides in from the left
- Accepts isOpen prop
- Header with "projects" title, with close button (which should close the sidebar)
- Shadcn tabs:
    - My projects
    - Shared
- Both tabs show empty placeholder state
- New project button with plus icon

### New project dialogue pattern
Do not build actual dialogues yet, but support:

- Title
- description
- footer actions



### Check when done
- All components render without errors
- 