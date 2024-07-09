function getCurrentPageURL() {
    return window.location.href;
}

function shareOnTiktok() {
    const url = getCurrentPageURL();
    window.open(`https://www.tiktok.com/share?url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnInstagram() {
    const url = getCurrentPageURL();
    window.open(`https://www.instagram.com/?url=${encodeURIComponent(url)}`, '_blank');
}

function shareOnFacebook() {
    const url = getCurrentPageURL();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function copyCode() {
    const url = getCurrentPageURL();
    navigator.clipboard.writeText(url).then(() => {
        alert("Page URL copied to clipboard!");
    });
}

function shareByEmail() {
    const url = getCurrentPageURL();
    const subject = encodeURIComponent("Check this out!");
    const body = encodeURIComponent("Here is something interesting I found: " + url);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function shareByText() {
    const url = getCurrentPageURL();
    const message = encodeURIComponent("Check out this link: " + url);
    window.open(`sms:?body=${message}`, '_self');
}

document.addEventListener('DOMContentLoaded', function() {
    // Find all sets of tab navigation and content
    document.querySelectorAll('.awe__quiz_hero_cards_col').forEach((col) => {
        const tabs = col.querySelectorAll('ul.tabnav li a');
        const contents = col.querySelectorAll('.tabcontent');

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

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll_to_top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show after scrolling 300px
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top on button click
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});

