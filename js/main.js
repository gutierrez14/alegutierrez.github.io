// get references to the element we need control
const menuButton=document.getElementById('menuButton'); //hamburger button
const sidebar=document.getElementById('sidebar'); // slide-in panel <nav>
const closeButton=document.getElementById('closeButton'); // close menu button "x"
const backdrop=document.getElementById('backdrop'); //dark overlay behind the panel
// open the sidebar: add classes and update ARIA attributes

function openSidebar(){
    sidebar.classList.add('open'); // CSS .backdrop.open => slide in
    backdrop.classList.add('show'); // CSS .backdrop.show => show overlay
    backdrop.hidden=false;
    menuButton.setAttribute('aria-expanded','true');
    sidebar.setAttribute('aria-hidden', 'false');
    closeButton.focus();
}

function closeSidebar(){
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    backdrop.hidden=true
    menuButton.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    menuButton.focus();
}

//click handlers

menuButton.addEventListener('click', ()=> {
    const isOpen=sidebar.classList.contains('open');
    isOpen? closeSidebar() : openSidebar();
});
closeButton.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);

//keyboard: Esc to close
document.addEventListener('keydown', (e) => {
    if(e.key == 'Escape' && sidebar.classList.contains('open')){
        closeSidebar();
    }
});