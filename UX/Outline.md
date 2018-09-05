# Practical UX & UI Guidelines for Developers

> As an end user, there's nothing more satisfying than a well crafted design.  As a developer, this often takes knowledge, forethought, and work to achieve.  We'll go over some fundamental design principles and models, and then build some guidelines and strategies for designing exceptional interfaces and experiences.  UI skills are easily transfered across organizations and tech stacks and allow you and your company's products to stand out and deliver value.

## Terms

### UX != UI

#### User Experience - All of the aspects that make up with way in which a user interacts with your company

* Application
* Marketing
* Support
* Content
* Branding

User Interface - 


### Interface - Shared boundary between two layers

* API - Application Programing Interface
* UI - User Interface
* GUI - Graphical User Interface


### Facets of Design

Information Architecture Design
Interaction Design
Interface Design
Graphical Design





## Frameworks

## Philosophies

### Human-Centric Design
* A human is using the product - is it designed how humans think


### Universal Design 

* remember users who don't have the same capacities as you do
* accessibility for blind/visually impaired users

* WCAG

**Corner Cuts**
 * Closed Captions on a Loud Bar TV
 * Corner Cuts - help wheelchairs, but also people (blind users)

### Conversational Design
* People talk to applications like they talk to people



### Fundamental Principles of Interaction
    Affordances
    Signifiers
    Affordances, Perceived Affordances, and Signifiers
    Affordances and Signifiers: A Conversation
    Mapping
    Feedback
    Conceptual Models


## Path & Steps

* Paths - Collection of Steps needed to complete a task
* Steps - Physical and Mental Effort
  * Length - Amount of time to complete
  * Width - The difficulty to complete (opposite precision)

### IRL Example

Driving to work

### Digital Example

Register an Account

### Takeaways

To make things easier:

* Reduce Number of Steps (reduce context shifts)
* Widen Paths (decrease precision)
* Shorten Paths (decrease time to complete)

## Informational Relevance should Equal Emphasis

## Promity should equal contextual Relationship



### Page / Layout

Page title should describe the purpose of the current page.  Page functionality should answer the question how easy is it to do that thing.  What tools / info do I need to do it?

Layouts and Natural mapping convey information to the user without any cognitive overhead.  Labels and text require the user read and digest that information before it can be deployed, a step that many users will skip, regardless of whether they *should* or not. 

Labels - Last refuge of a design scoundrel.  Expectations are much stronger than text and can be absorbed immediately without reading
* Recycle Bin vs Trash Bin


Create Distinct Visual Hierarchy for master page layout

Current Navigational state should be apparent to user (bread crumbs or active highlighting)


Use icons for visual clarity but always include a label text
  https://ux.stackexchange.com/a/64494/34594


### Good Rules

Conditional fields
  https://ux.stackexchange.com/a/116668/34594
    If they can't do something they WOULD expect to do - show it, disable it, and tell them WHY
    If they can't do something they WOULDN'T expect to do - hide it altogether

All disabled fields should include a message as to why they're disabled






### Controls / Metaphors

> Users spend 90% of their time using an application that isn't yours

When adding new UI elements - Check if a similar UI metaphor already exists
1. elsewhere in the project
2. In whatever framework you're using
3. In alternative commercial products
4. Else - Do heavy user research and design if it's truly novel outside those arenas


Signifiers tell us which actions are possible on an element
Button signifiers should include visual shading changes on hover and the pointer cursor icon

Actions should look like actions (buttons if possible) and have good, tailored verb descriptions
"Add New Patient" better than "Create"



User Selection amongst predefined options:

* \<5 Options -> Radio Button (list)
* \<20 Options -> Dropdown / Comobobox / `<Select>`
* \>20 Options -> Filterable dropdown
* \>100 Options -> Filterable dropdown **with template** (or if differentiated by more than just name)
 
Grid Display
* \< 10 records   - display
* \> 10 records   - sort
* \> 25 records   - sort + filter
* \> 50 records   - sort + filter + client level* pagination
* \> 500 records  - sort + filter + server level* pagination
* \> 1000 records - sort + filter + database level pagination
    
## Forms 

Required fields should be visible before attempting a save
  This is even true of fields that become conditionally required while editing a field

Required field messages should appear next to the invalid fields they describe in red text


Do not use form reset buttons
https://ux.stackexchange.com/a/42773/34594


Save buttons should be visible at all times to alert the user they have unsaved data

Users should be warned before abandoning unsaved changes


### Progressive Improvement


## Errors - be Friendly

Clients should not be able to produce an error state within the application.  The ability to do so should be considered a bug and should be caught ahead of time with forcing functions.  If this happens, the dev, via the application, should strive to be human and apologetic with appropriate levity.

*`Forcing functions`* are constraints that prevent users from performing incorrect operations/actions



## Feedback

All operations that change data state (non-idempotent) should display a modeless confirmation of successful completion to the user. 

Actions which update the state of the application should provide immediate visual feedback that the action has been initiated

Any operations that take longer than 2 seconds more than 50% of the time (including non-ideal network conditions / processors) should have a visual indication that the process is taking place



## Reach Guidelines

Users should be notified when their Session is about to expire on the sever so they have the opportunity to extend their session before losing their progress

Application State should be managed exclusively though URL
    With the exception of page specific data entry, the URL should dictate everything you need to know about the state
    One upshot of this is having specific, deep URLs that can be shared across users/time
    But it's also a smell that something *could* go wrong on the client if you're relying on Session to manage State (as opposed to globally cached data)
    Since users may open multiple tabs, it's never safe to assume we know where we're coming from outside of the  URL
    http://localhost:50004/CSHN-DEV/Client/1480/Service/20622/Assessment/Edit/8#Social
    http://localhost:50004/CSHN-DEV/Reports?ReportName=ClientList

### Resources

### Design Framework
    https://material.io/guidelines/

### Articles
    https://www.nngroup.com/articles/web-form-design/
    http://www.nixdell.com/classes/HCI-and-Design-Spring-2017/The-Design-of-Everyday-Things-Revised-and-Expanded-Edition.pdf
    https://www.jnd.org/books/design-of-everyday-things-revised.html




    
Micro-grammars
http://miksovsky.blogs.com/flowstate/2007/03/collecting_data.html