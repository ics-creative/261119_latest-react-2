import { delayedPromise } from "../../logics/delayedPromise.js";

export const profiles = [
  { id: "user-1", name: "Misaki Sato", role: "Designer" },
  { id: "user-2", name: "Jonathan Buyers", role: "Engineer" },
];

/**
 * プロフィールを取得する
 * @param {string} profileId 取得するプロフィールのID
 */
export const fetchProfile = (profileId) =>
  delayedPromise(
    profiles.find((profile) => profile.id === profileId),
    300,
  );
