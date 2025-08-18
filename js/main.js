// G E T  R E F E R E N C E S  F R O M  P A G E

// document : obj. that represents the entire web page (html doc)
// .getElementById : searches thru the page to get elem. 
const menuButton=document.getElementById('menuButton'); // get hamburger button by id="menuButton"
const sidebar=document.getElementById('sidebar'); // slide-in panel <nav>
const closeButton=document.getElementById('closeButton'); // close menu button "x"
const backdrop=document.getElementById('backdrop'); //dark overlay behind the panel

// F U N C T I O N S  T O  O P E N / C L O S E  S I D E B A R
function openSidebar(){
    sidebar.classList.add('open'); // adds a css class "open". CSS uses sidebar.open. to slide the sidebar into view. W/o "open" the sidebar stays hiddent.
    backdrop.classList.add('show'); // makes the grey/black overlay appear
    backdrop.hidden=false; //to be double safe, makes sure the backdrop is visible
    menuButton.setAttribute('aria-expanded','true'); //updates accessibility, screen readers know the sidebar menu is open
    sidebar.setAttribute('aria-hidden', 'false'); //tells assisstive tech that the sidebar is visible
    closeButton.focus(); //moves keyboard focus to 'x'. Can interact with close button.

    // focus : for keyboard users, 'tab' key moves from element to next available element. 
}

function closeSidebar(){
    sidebar.classList.remove('open'); // removes "open" css class . CSS uses sidebar.close to close the sidebar out of view. W/o "open", the sidebar hides/slides out pf view.
    backdrop.classList.remove('show'); // makes backdrop dissapear
    backdrop.hidden=true //makes sure the backdrop is no longer in view 
    menuButton.setAttribute('aria-expanded', 'false'); //updates status. tell screen readers the sidebar is not open (is collapsed) 
    sidebar.setAttribute('aria-hidden', 'true'); // tells assistive tech that the sidebar is not visble/is hidden
    menuButton.focus(); // moves keyboard focus back to hamburger button
}

// W I R E  U P  I N T E R A C T I O N

/*
    menuButton.addEventListener : 
        - listens for click on the hamburger/ menu button
        - checks if sidebar has the CSS class "open"
            > if open, call 'closeSidebar'
            > if closed, call 'openSidebar'
*/ 
menuButton.addEventListener('click', ()=> {
    const isOpen=sidebar.classList.contains('open');
    isOpen? closeSidebar() : openSidebar(); // if/else
});

closeButton.addEventListener('click', closeSidebar); //closes sidebar when 'x' is clicked
backdrop.addEventListener('click', closeSidebar); //closes sidebar when backdrop is clicked


/*
    document.addEventListener : use 'ESC' to close
        - listens for any key click
        - if the key == ESC key && the side bar is open, call 'closeSidebar()'
*/ 
document.addEventListener('keydown', (event) => {
    if(event.key == 'Escape' && sidebar.classList.contains('open')){
        closeSidebar();
    }
});