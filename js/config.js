/**
 * Abhishek Medical Hall - Review App Configuration
 * You can edit any details below at any time.
 */

const CONFIG = {
  shopName: "Abhishek Medical Hall",
  shopTagline: "Trusted Healthcare & Genuine Medicines",
  shopLocation: "Main Road, Adapur, East Champaran, Bihar - 845301",
  shopPhone: "+91 98765 43210",
  
  // Google Maps / Search link for reviews
  googleReviewUrl: "https://www.google.com/search?q=abhishek+medical+adapur+bihar&oq=abhishek+medical+adapur+bihar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgcIAhAAGO8FMgcIAxAAGO8FMgcIBBAAGO8FMgoIBRAAGIAEGKIE0gEIODg2NWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",

  // Smart Pre-defined Review Suggestions for 4 and 5 Star Ratings
  reviewSuggestions: [
    {
      category: "⭐ Most Popular",
      badge: "Popular",
      reviews: [
        "Best medical shop in Adapur! 100% genuine medicines, fair pricing, and very polite owner Abhishek ji.",
        "One of the most trusted pharmacies in Adapur. All prescribed medicines are readily available here.",
        "अदापुर का सबसे भरोसेमंद मेडिकल स्टोर। सभी दवाइयां सही दाम पर हमेशा उपलब्ध रहती हैं।"
      ]
    },
    {
      category: "💊 Medicine & Quality",
      badge: "Quality",
      reviews: [
        "All emergency and prescribed medicines always in stock. Never had to return empty-handed.",
        "Genuine branded medicines with proper bills and reasonable discounts in Adapur.",
        "Excellent medicine stock! Baby care, wellness, and prescription drugs all available in one place."
      ]
    },
    {
      category: "🤝 Service & Behavior",
      badge: "Service",
      reviews: [
        "Very fast service and extremely helpful guidance regarding dosage. Highly recommended in Adapur!",
        "Customer friendly behavior, clean shop, and prompt service. Best experience at Abhishek Medical Hall.",
        "दुकानदार का व्यवहार बहुत ही अच्छा और मददगार है। बहुत जल्दी दवाइयां मिल जाती हैं।"
      ]
    },
    {
      category: "💰 Value & Discounts",
      badge: "Pricing",
      reviews: [
        "Affordable prices, authentic medicines, and genuine discounts compared to other shops in Adapur.",
        "Reliable medicine store in Adapur with honest rates and best healthcare support."
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
