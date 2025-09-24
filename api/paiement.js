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
