/**
 * Abhishek Medical Hall - Review App Configuration
 * You can edit any details below at any time.
 */

const CONFIG = {
  shopName: "Abhishek Medical Hall",
  shopTagline: "Trusted Healthcare & Genuine Medicines",
  shopLocation: "Central Bank Road Adapur, East Champaran, Bihar - 845301",
  shopPhone: "+91 8651887544",
  
  // Google Maps / Search link for reviews
  googleReviewUrl: "https://www.google.com/search?q=abhishek+medical+adapur+bihar&oq=abhishek+medical+adapur+bihar&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgoIARAAGIAEGKIEMgcIAhAAGO8FMgcIAxAAGO8FMgcIBBAAGO8FMgoIBRAAGIAEGKIE0gEIODg2NWowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8",

  // Rating-specific review suggestions. Each category includes Hindi options.
  reviewSuggestions: [
    {
      category: "⭐ Most Popular",
      badge: "Popular",
      reviews5: [
        "Best medical shop in Adapur! 100% genuine medicines, fair pricing, and very polite owner Birbeni ji.",
        "One of the most trusted pharmacies in Adapur. All prescribed medicines are readily available here.",
        "आदापुर का सबसे भरोसेमंद मेडिकल स्टोर। सभी दवाइयां सही दाम पर हमेशा उपलब्ध रहती हैं।"
      ],
      reviews4: [
        "Good medical shop in Adapur with genuine medicines and helpful service.",
        "A reliable pharmacy for prescribed medicines and everyday healthcare needs.",
        "आदापुर में अच्छी मेडिकल दुकान है। दवाइयां सही मिलती हैं और व्यवहार भी अच्छा है।"
      ]
    },
    {
      category: "💊 Medicine & Quality",
      badge: "Quality",
      reviews5: [
        "All emergency and prescribed medicines always in stock. Never had to return empty-handed.",
        "Genuine branded medicines with proper bills and reasonable discounts in Adapur.",
        "Excellent medicine stock! Baby care, wellness, and prescription drugs all available in one place.",
        "यहां असली और अच्छी गुणवत्ता की दवाइयां मिलती हैं। जरूरत की ज्यादातर दवाइयां उपलब्ध रहती हैं।"
      ],
      reviews4: [
        "Most prescribed medicines were available and the quality was good.",
        "A good place in Adapur for genuine branded medicines and regular healthcare products.",
        "यहां अच्छी गुणवत्ता की दवाइयां मिलती हैं और जरूरत की दवाइयां आसानी से मिल जाती हैं।"
      ]
    },
    {
      category: "🤝 Service & Behavior",
      badge: "Service",
      reviews5: [
        "Very fast service and extremely helpful guidance regarding dosage. Highly recommended in Adapur!",
        "Customer friendly behavior, clean shop, and prompt service. Best experience at Abhishek Medical Hall.",
        "दुकानदार का व्यवहार बहुत ही अच्छा और मददगार है। बहुत जल्दी दवाइयां मिल जाती हैं।"
      ],
      reviews4: [
        "Good service and helpful staff. The medicines were provided without much waiting.",
        "The shop was clean and the service was polite and prompt.",
        "दुकानदार का व्यवहार अच्छा है और दवाइयां जल्दी मिल जाती हैं।"
      ]
    },
    {
      category: "💰 Value & Discounts",
      badge: "Pricing",
      reviews5: [
        "Affordable prices, authentic medicines, and genuine discounts compared to other shops in Adapur.",
        "Reliable medicine store in Adapur with honest rates and best healthcare support.",
        "यहां दवाइयां सही दाम पर मिलती हैं और अच्छे डिस्काउंट भी मिलते हैं।"
      ],
      reviews4: [
        "Prices were reasonable and the medicines were genuine.",
        "A good option in Adapur for fair medicine prices and regular discounts.",
        "यहां दवाइयों के दाम ठीक हैं और उचित छूट भी मिलती है।"
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
