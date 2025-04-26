const searchInput = document.getElementById('searchInput');
const searchableElements = document.querySelectorAll('.searchable');

// Add event listener for real-time search
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    searchableElements.forEach(element => {
        const title = element.querySelector('h2, h3').textContent.toLowerCase();
        const description = element.querySelector('p').textContent.toLowerCase();
        const category = element.querySelector('.course-category')?.textContent.toLowerCase() || '';
        const level = element.querySelector('.course-level')?.textContent.toLowerCase() || '';

        const isVisible = 
            title.includes(searchTerm) || 
            description.includes(searchTerm) || 
            category.includes(searchTerm) || 
            level.includes(searchTerm);

        // Add fade effect for smooth transitions
        if (isVisible) {
            element.style.display = '';
            element.style.opacity = '1';
        } else {
            element.style.opacity = '0';
            setTimeout(() => {
                if (element.style.opacity === '0') {
                    element.style.display = 'none';
                }
            }, 300);
        }
    });
}

// Add enter key support for search
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});