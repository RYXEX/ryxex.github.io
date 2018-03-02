/* global $ */

function checker() { // eslint-disable-line
  const name = $('#name')[0].value.replace(/[^A-Za-z0-9_]/gi, '');
  const validNames = ['RYXEX_exchange', 'RYXEXRep1_twitter', 'RYXEXRep2_twitter', 'RYXEXRep3_twitter', 'RYXEXRep4_twitter', 'RYXEXSam_twitter'];
  if (validNames.map(x => x.toUpperCase()).indexOf(name.toUpperCase()) >= 0) {
    $('#result').html(`${name.toUpperCase()} is an official RYXEX representative.`);
  } else {
    $('#result').html(`${name.toUpperCase()} is NOT OFFICIAL.`);
  }
}
