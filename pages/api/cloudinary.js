export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    let { folder } = req.query; // Read folder from query param
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    console.log('cloudName:', cloudName);
    console.log('apiKey:', apiKey);
    console.log('apiSecret:', apiSecret);

    if (!cloudName || !apiKey || !apiSecret || !folder) {
        return res.status(500).json({ error: "Missing environment variables" });
    }
    if(folder === 'all'){
        folder = 'fashion';
    }
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search?expression=folder:${folder}`;
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    try {
        const response = await fetch(url, {
            headers: { Authorization: `Basic ${auth}` },
        });

        if (!response.ok) {
            throw new Error(`Cloudinary API error: ${response.statusText}`);
        }

        const data = await response.json();
        return res.status(200).json(data.resources); // Return images to frontend
    } catch (error) {
        console.error("Cloudinary Fetch Error:", error);
        return res.status(500).json({ error: "Failed to fetch images" });
    }
}
