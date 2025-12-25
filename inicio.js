// Small interactions: mobile nav toggle and year insertion
document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        primaryNav.style.display = 'block';
      } else {
        primaryNav.style.display = '';
      }
    });
  }

  var elYear = document.getElementById('year');
  if(elYear) elYear.textContent = new Date().getFullYear();
});
