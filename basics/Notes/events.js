/* 
EVENT BUBBLING (EXAMPLES IN FOLDER project_02)
Event fired on for example button inside paragraph and inside section, will be 
fired also on these parent elements (one at a time, in order in which they are 
appearing in html (so button>paragraph>section etc. all the way to html element,
which is in fact the root)). When this is happening we are saying that the event
is bubbling up. Button in our example is called target element. Target element 
is stored as a property in event object so all the parent elements on which the 
event will also fire know the target element.

EVENT DELEGATION (EXAMPLES IN FOLDER project_02)
We do it by simply setting up event listener on parent element (of the element 
that we would like listen to or on the main element) and wait until the event 
bubbles up. Then we can do wathever we want with our target element. The event 
handling is delagated to parent element thus we call it event delegation.
Event delegation is usefull when we have a lot of child elements that need to
have event listeners (we don't need actually add all listeners we can just add 
one on the parent element). Other situation when we want to use event delegation
is when we want to have event listener on the element that is not yet present 
when the page is loded (dynamically added content like lists etc.).

*/