<script type="module">
  import { getLCP, getFID, getCLS } from 'https://cdn.jsdelivr.net/npm/web-vitals@2.1.4/dist/web-vitals.module.js';

  function envoyerDonnees(metrie, valeur) {
    // Ici tu peux envoyer les données sur ton serveur ou les loguer
    console.log(`Métrique: ${metrie}, Valeur: ${valeur}`);
    // Exemple d'envoi POST vers ton serveur :
    /*
    fetch('https://ton-serveur.com/collect-web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metrie, valeur, date: new Date().toISOString() })
    });
    */
  }

  getLCP(metric => envoyerDonnees('LCP', metric.value));
  getFID(metric => envoyerDonnees('FID', metric.value));
  getCLS(metric => envoyerDonnees('CLS', metric.value));
</script>
