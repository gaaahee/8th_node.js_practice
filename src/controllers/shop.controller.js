import { createShop } from "../services/shop.service.js";

export const handleCreateShop = async (req, res) => {
  const regionId = req.params.regionId;
  try {
    const shopId = await createShop(regionId, req.body);
    return res.status(201).json({ shopId });
  } catch (error) {
    if (error.message === "존재하지 않는 지역입니다.") {
      return res.status(404).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
};