// FSL timed promo v 1.0.1
// By Roberto Mas - https://robertomas.com/
// project url https://github.com/robertomas/fsl-timed-promo

jQuery( document ).ready(function() {
  let activePromo = jQuery('[data-fsl-timed-promo]');

  activePromo.each(function() {
    let $elem = jQuery(this);

    let startDate = new Date($elem.data('fsl-start-date'));
    let endDate = new Date($elem.data('fsl-end-date'));
    let displayType = $elem.data('fsl-display-type');
    let display = 'block';

    console.log(displayType);

    if (displayType) {
      display = displayType;
    }

    // javascript month start at 0 not 1
    function promoDuration(currentDate) {
      if(startDate <= currentDate && currentDate <= endDate) {
        // current date is within range
        $elem.css('display', display);
      } else {
        // current date is out of range
        $elem.css('display', 'none');
      }
    }
    promoDuration(new Date()); // now
  });
});
