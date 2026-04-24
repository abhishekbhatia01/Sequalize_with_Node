import { nanoid } from "nanoid";
import * as urlModel from "./urlModel.js";

export const shortenUrl = async (req, res) => {
  try {
    const { url } = req.body;
    console.log("Received URL:", url);
    const shortCode = nanoid(8);

    await urlModel.createShortUrl(shortCode, url);

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const urlData = await urlModel.getUrlByCode(shortCode);

    if (!urlData) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.redirect(urlData.original_url);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};