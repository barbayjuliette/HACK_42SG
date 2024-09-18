console.log("This is JS from my About page")

document.addEventListener('DOMContentLoaded', function()
{
	const topnavLinks = document.getElementById('topnavLinks');
	const menuIcon = document.getElementById('menuIcon');

	menuIcon.addEventListener('click', function(event)
	{
		event.stopPropagation();
		if (window.innerWidth <= 1000)
			topnavLinks.classList.toggle('show');
	});

	// Close the menu when clicking outside
	document.addEventListener('click', function(event)
	{
		if (!topnavLinks.contains(event.target) && !menuIcon.contains(event.target))
		{
			topnavLinks.classList.remove('show');
		}
	});
});
