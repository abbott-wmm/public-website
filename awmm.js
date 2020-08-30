<script>
// when DOM is ready
document.addEventListener('DOMContentLoaded', ()=>{
 // setup scroll into/out of view
 document.querySelectorAll('.section__wrapper').forEach(trigger => { 
  new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if(entry.isIntersecting){ // on scroll into view
        document.querySelectorAll('.brand').forEach(target => target.classList.add('hide-brand'));
      }
    });
  },
  { 
    threshold: 0 // from which point to trigger
                 // threshold: 0 - as soon as trigger is visible
                 // threshold: 1 - when trigger is fully visible
                 // threshold: 0.5 - trigger halfway visible 
  }).observe(trigger);
 });

 // setup scroll into/out of view
 document.querySelectorAll('.content-hero').forEach(trigger => { 
  new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if(entry.isIntersecting){ // on scroll into view
        document.querySelectorAll('.brand').forEach(target => target.classList.remove('hide-brand'));
      }
      else{ // on scroll out of view
        document.querySelectorAll('.brand').forEach(target => target.classList.remove('hide-brand'));
      }
    });
  },
  { 
    threshold: 0.5 // from which point to trigger
                 // threshold: 0 - as soon as trigger is visible
                 // threshold: 1 - when trigger is fully visible
                 // threshold: 0.5 - trigger halfway visible 
  }).observe(trigger);
 });
});
</script>