/**
 * Created by alo on 7/17/14.
 */
countryIcons = {
    '999000041000000102': 'gb',
    '999000011000000103': 'gb',
    '999000021000000109': 'gb',
    '999000031000000106': 'gb',
    '450829007': 'es',
    '731000124108': 'us',
    '5991000124107': 'us',
    '161771000036108': 'au',
    '32570231000036109': 'au',
    '32506021000036107': 'au',
    '32570491000036106': 'au',
    '45991000052106': 'se',
    '554471000005108': 'dk',
    '9999999998': 'gmdn',
    '466707005': 'mdp',
    '11000146104': 'nl'


}

Handlebars.registerHelper('countryIcon', function(moduleId) {
    return countryIcons[moduleId];
});