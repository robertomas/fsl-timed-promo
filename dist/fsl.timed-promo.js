// FSL timed promo v 1.0.0
// By Roberto Mas
// By Roberto Mas - https://robertomas.com/
// project url https://github.com/robertomas/fsl-timed-promo

jQuery( document ).ready(function() {
  let activePromo = jQuery('[data-fsl-timed-promo]');

  activePromo.each(function() {
    let $elem = jQuery(this);

    let startDate = new Date($elem.data('fsl-start-date'));
    let endDate = new Date($elem.data('fsl-end-date'));

    // javascript month start at 0 not 1
    function promoDuration(currentDate) {
      if(startDate <= currentDate && currentDate <= endDate) {
        // current date is within range
        $elem.css('display', 'flex');
      } else {
        // current date is out of range
        $elem.css('display', 'none');
      }
    }
    promoDuration(new Date()); // now
  });
});
