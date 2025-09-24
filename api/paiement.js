// paiement.js
export async function verifierCle(cle) {
  const url = `https://ton-projet.vercel.app/api/auth?cle=${cle}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.success ? "✅ Module activé" : "❌ Accès refusé";
  } catch (err) {
    return "⚠️ Erreur serveur, vérifiez votre connexion.";
  }
}

// Fonction pour envoyer Core Web Vitals
export async function envoyerVitals(metrie, valeur) {
  try {
    await fetch("https://ton-projet.vercel.app/api/collect-vitals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        metrie,
        valeur,
        url: window.location.href,
        navigateur: navigator.userAgent,
        date: new Date().toISOString()
      })
    });
  } catch (err) {
    console.error("Erreur envoi Vitals:", err);
  }
}