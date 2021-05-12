# Interactive map

The app to look through the map of your department and get information about each room.

## Features
* Explore your Faculty map
* Select Floor to see its schema
* Hover any room to get its short information
* Click any room to get its detailed description
* Search needed room on the Faculty or Floor map

### In future releases (beyond the scope of university lab)
* Evacuation routes
* User location detection (inside the faculty) and routes to the selected room
* Links to personnel webpages (if any exist)
* Links to room schedule (mytimetable.live)


# Glossary

## Related
**Interactive map** - the name of the application with full functionality.

**Interactive Faculty map** - the name of a certain release of the app with functionality limited to only the map of Faculty of Computer Science and Cybernetics.

**Faculty** - is a building (or its part) where a group of related departments is located (e.g. Faculty of Computer Science and Cybernetics).

**Floor** - is a horizontal part of a building with no (or minimal) obstacles (stairs etc) between its parts.

**Room** - is a part of a building with explicit borders (e.g. walls) that can be assigned personnel and/or department.

**Search room** - filter Faculty's or Floor's rooms by name at correspoding Faculty or Floor.

**Explore** (Faculty/Floor map) - look on a Map, select appropriate Floor/Room and search Rooms list.

## Components
**SVG map** - is a schema of a Faculty or a Floor, on which objects (Floors, Rooms etc) can be selected.

**List** (of Floors, Rooms) - list of objects (Floors or Rooms) on specific Faculty or Floor. Clicking on a certain object will select it on the svg map.

**Search bar** - an input which performs search room.

**Room info block** - a block with detailed Room information.

(Faculty/Floor) **Map** - svg map, list of objects (Floors, Rooms etc) on it and a search bar.
