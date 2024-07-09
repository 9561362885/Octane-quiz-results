document.addEventListener('DOMContentLoaded', function() {
    // Find all sets of tab navigation and content
    document.querySelectorAll('.aura__cards_product').forEach((col) => {
        const tabs = col.querySelectorAll('ul.auranav li a');
        const contents = col.querySelectorAll('.auracontent');

        // Add 'active' class to the first tab and show the first tab content
        if (tabs.length > 0 && contents.length > 0) {
            tabs[0].classList.add('active');
            contents[0].style.display = 'block';

            // Add click event to all tab links
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', function(event) {
                    event.preventDefault();

                    // Remove 'active' class from all tabs and add to the clicked tab
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');

                    // Show the target tab content and hide others
                    contents.forEach(content => content.style.display = 'none');
                    contents[index].style.display = 'block';
                });
            });
        }
    });
});

  