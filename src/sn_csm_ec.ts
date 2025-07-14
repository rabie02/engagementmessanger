export function loadEngagementMessenger() {
  const script = document.createElement('script');
  script.src = "https://dev223729.service-now.com/scripts/sn_csm_ec.js?v=5.6";
  script.async = true;
  script.onload = () => {
    window.SN_CSM_EC?.init({
      moduleID: "0f2361d3c3662210255c5b2ed401316f",
      loadFeature: window.SN_CSM_EC?.loadEMFeature()
    });
  };
  document.body.appendChild(script);
}