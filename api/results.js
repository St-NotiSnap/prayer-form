export default async function handler(req, res) {
  try {
    const upstream = await fetch(
      "https://script.google.com/macros/s/AKfycbxzZ7Fp8l2rCiw0jG1K0fSGZwMg6J6iYMRuXKZFVp_6uF5IF50AopTJeQ9b8PuOPIyq/exec?action=results"
    );
    const text = await upstream.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      data = { count: 0, phrases: [] };
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(data);
  } catch (err) {
    res.status(200).json({ count: 0, phrases: [] });
  }
}
