document.addEventListener('DOMContentLoaded', function() {
   const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
   const navItems = document.querySelectorAll('.nav');

   navItems.forEach(item => {
         if (item.dataset.page === currentPage) {
            item.classList.add('active');
         }

         item.addEventListener('click', function() {
            const page = this.dataset.page;
            window.location.href = page + '.html';
         });
   });
});