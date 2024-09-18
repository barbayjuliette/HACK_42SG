console.log("This is JS from my About page")

/*--------------------------------------------------------------*/
/* EVENT LISTENERS */
/*--------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function()
{
	initMenuTransition();
	initDarkModeToggle();
});

/*--------------------------------------------------------------*/
/* DARK MODE TOGGLE */
/*--------------------------------------------------------------*/

function initDarkModeToggle()
{
	const toggleModeIcon = document.getElementById('toggleModeIcon');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('dark-mode') === 'enabled')
        document.body.classList.add('dark-mode');

    toggleModeIcon.addEventListener('click', function()
	{
        document.body.classList.toggle('dark-mode');
        
        // Save dark mode state in localStorage
        if (document.body.classList.contains('dark-mode'))
            localStorage.setItem('dark-mode', 'enabled');
        else
            localStorage.setItem('dark-mode', 'disabled');
    });
}

/*--------------------------------------------------------------*/
/* DROPDOWN MENU TRANSITION */
/*--------------------------------------------------------------*/

function initMenuTransition()
{
    const topnavLinks = document.getElementById('topnavLinks');
    const menuIcon = document.getElementById('menuIcon');

	// Open or close menu depending on current state
    menuIcon.addEventListener('click', function(event)
	{
        event.stopPropagation();
		if (!topnavLinks.classList.contains('show'))
			showMenu(topnavLinks);
		else
			hideMenu(topnavLinks);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event)
	{
        if (!topnavLinks.contains(event.target) && !menuIcon.contains(event.target))
            hideMenu(topnavLinks);
    });
}

function showMenu(topnavLinks)
{
	topnavLinks.classList.toggle('show');
}

function hideMenu(topnavLinks)
{
	topnavLinks.classList.add('hide');
	// Wait for fade out transition to complete
	setTimeout(() => {
		topnavLinks.classList.remove('show');
		topnavLinks.classList.remove('hide');
	}, 300); 
}

