import '../../scss/main.scss';
import loadScript from './loadScript';


window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => {
      if (window.location.hostname.search(/\.kcc\.edu/) == -1)
        return;

      // Load the Clarus Corp script first
      return loadScript('https://tag.simpli.fi/sifitag/6089e310-26f9-0136-e8b0-06659b33d47c', 'no-referrer-when-downgrade', true)
      .catch(e => {
        console.error(e);
        // Handle errors

      })
    }).then(() => {
      // Custom JS here

    })
});