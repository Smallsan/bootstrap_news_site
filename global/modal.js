document.addEventListener('DOMContentLoaded', (event) => {
    if (!sessionStorage.getItem('firstVisit')) {
      var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {});
      myModal.show();
      sessionStorage.setItem('firstVisit', '1');
    }
  });