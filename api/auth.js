// api/auth.js
export default function handler(req, res) {
  const { cle } = req.query;

  // 🔑 Liste des clés autorisées (tu peux la mettre en DB plus tard)
  const clesAutorisees = ["FACILITATEURS-123", "CLIENT-XYZ-456"];

  if (!cle) {
    return res.status(400).json({ success: false, message: "Clé manquante ❌" });
  }

  if (clesAutorisees.includes(cle)) {
    return res.status(200).json({ success: true, message: "✅ Accès autorisé" });
  } else {
    return res.status(403).json({ success: false, message: "❌ Clé invalide" });
  }
}
