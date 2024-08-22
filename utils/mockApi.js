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
              conversions: 6965,
              cost: 3935.5,
              ctr: 1000.0,
            },
          },
          {
            adName: "Banner Ad 2",
            metrics: {
              impressions: 60000,
              clicks: 3000,
              conversions: 3000,
              cost: 2325.25,
              ctr: 1000.5,
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
              clicks: 4050,
              conversions: 2885,
              cost: 3795.25,
              ctr: 100.9,
            },
          },
          {
            adName: "Video Ad 2",
            metrics: {
              impressions: 30000,
              clicks: 59050,
              conversions: 2490,
              cost: 4305.25,
              ctr: 40308,
            },
          },
        ],
      },
      {
        adGroupName: "Facebook Ads",
        ads: [
          {
            adName: "FB Ad 1",
            metrics: {
              impressions: 500000,
              clicks: 45000,
              conversions: 1295,
              cost: 575.25,
              ctr: 0.9,
            },
          },
          {
            adName: "FB Ad 2",
            metrics: {
              impressions: 300000,
              clicks: 5000,
              conversions: 1000,
              cost: 1225.25,
              ctr: 40.8,
            },
          },
        ],
      },
      {
        adGroupName: "Twitter Ads",
        ads: [
          {
            adName: "Twitter Ad 1",
            metrics: {
              impressions: 80000,
              clicks: 5000,
              conversions: 2450,
              cost: 1375.25,
              ctr: 500,
            },
          },
          {
            adName: "Twitter Ad 2",
            metrics: {
              impressions: 300000,
              clicks: 2350,
              conversions: 400,
              cost: 255.25,
              ctr: 0.8,
            },
          },
        ],
      },
      {
        adGroupName: "Instagram Ads",
        ads: [
          {
            adName: "Instagram Ad 1",
            metrics: {
              impressions: 500000,
              clicks: 4500,
              conversions: 255,
              cost: 355.25,
              ctr: 0.9,
            },
          },
          {
            adName: "Instagram Ad 2",
            metrics: {
              impressions: 300000,
              clicks: 25000,
              conversions: 2000,
              cost: 525.25,
              ctr: 1.5,
            },
          },
        ],
      },
    ],
  };
};
