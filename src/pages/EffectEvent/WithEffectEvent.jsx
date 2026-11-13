import { useEffect, useEffectEvent, useState } from "react";
import { SelectBox } from "../../components/SelectBox.jsx";
import { Toast } from "../../components/Toast.jsx";
import { useToast } from "../../hooks/useToast.js";
import { fetchProfile, profiles } from "./fetchProfile.js";
import { ProfileResult } from "./ProfileResult.jsx";

/**
 * useEffectEventを使ったデモ
 */
export const WithEffectEvent = () => {
  const [profileId, setProfileId] = useState("user-1");
  const [theme, setTheme] = useState("white");
  const [result, setResult] = useState({ profile: null, count: 0 });
  const { toast, showToast } = useToast();

  const showToastWithTheme = useEffectEvent(() => {
    showToast(`Success! theme:${theme}`);
  });

  useEffect(() => {
    const fetchProfileAndNotify = async () => {
      const profile = await fetchProfile(profileId);
      showToastWithTheme();

      setResult((previous) => ({ profile, count: previous.count + 1 }));
    };

    fetchProfileAndNotify();
  }, [profileId]);

  return (
    <div className="effect-event">
      <div className="effect-event__controls">
        <SelectBox
        label="User"
          list={profiles.map((profile) => ({
            value: profile.id,
            label: profile.id,
          }))}
          value={profileId}
          onChange={(event) => setProfileId(event.target.value)}
        />
        <SelectBox
        label="Theme Color"
          list={[
            { value: "black", label: "black" },
            { value: "white", label: "white" },
          ]}
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        />
      </div>
      <ProfileResult
        count={result.count}
        name={result.profile?.name}
        role={result.profile?.role}
        theme={theme}
      />
      <Toast message={toast?.message} />
    </div>
  );
};
