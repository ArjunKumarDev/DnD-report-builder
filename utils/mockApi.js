// export const fetchMockCampaignData = async () => {
//   return {
//     metrics: [
//       { id: "1", name: "Impressions", value: 15000 },
//       { id: "2", name: "Clicks", value: 300 },
//       { id: "3", name: "Conversions", value: 50 },
//       { id: "4", name: "Cost", value: 1200 },
//       { id: "5", name: "CTR", value: 2.5 },
//     ],
//   };
// };

// utils/mockApi.js

export const fetchMockCampaignData = async () => {
  return {
    adGroups: [
      {
        adGroupName: "Banner Ads",
        ads: [
          {
            adName: "Banner Ad 1",
            metrics: {
              impressions: 90000,
              clicks: 9000,
              conversions: 65,
              cost: 315.5,
              ctr: 1.0,
            },
          },
          {
            adName: "Banner Ad 2",
            metrics: {
              impressions: 60000,
              clicks: 300,
              conversions: 30,
              cost: 135.25,
              ctr: 0.5,
            },
          },
        ],
      },
      {
        adGroupName: "Video Ads",
        ads: [
          {
            adName: "Video Ad 1",
            metrics: {
              impressions: 50000,
              clicks: 450,
              conversions: 25,
              cost: 375.25,
              ctr: 0.9,
            },
          },
          {
            adName: "Video Ad 2",
            metrics: {
              impressions: 30000,
              clicks: 250,
              conversions: 20,
              cost: 225.25,
              ctr: 0.8,
            },
          },
        ],
      },
    ],
  };
};
