import { useEffect } from 'react';
import { loadEngagementMessenger } from './sn_csm_ec';

declare global {
  interface Window {
    SN_CSM_EC?: {
      init: (config: { moduleID: string; loadFeature: any }) => void;
      loadEMFeature: () => any;
    };
  }
}

function EngagementPage() {
  useEffect(() => {
    loadEngagementMessenger(); // Appel de ta fonction
  }, []);

  return (
    <div>
      <h2>Engagement Messenger Page</h2>
      <p>Le widget doit apparaître ici...</p>
    </div>
  );
}

export default EngagementPage;
