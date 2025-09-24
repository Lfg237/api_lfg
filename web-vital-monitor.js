// api/collect-vitals.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("📊 Core Web Vitals reçu :", data);
    // Ici tu peux stocker dans DB ou service externe
    res.status(200).json({ success: true, message: "Données reçues ✅" });
  } else {
    res.status(405).json({ success: false, message: "Méthode non autorisée" });
  }
}