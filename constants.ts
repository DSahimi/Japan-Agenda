import { ItineraryData } from './types';

// Helper to generate reliable images based on description
const getImage = (prompt: string) => 
  `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt + " japan travel photography high quality 4k")}`;

export const ITINERARY_DATA: ItineraryData = {
  tokyo: {
    id: 'tokyo',
    label: 'Tokyo',
    title: "Part 1: The Tokyo Sprint",
    base: "Sumida House (Hikifune)",
    theme: {
      bg: "bg-blue-600",
      border: "border-blue-600",
      text: "text-blue-600",
      lightBg: "bg-blue-50"
    },
    days: [
      {
        date: "Dec 17 (Wed)",
        title: "Arrival & First Impact",
        logistics: "Train: Airport → Hikifune (Keisei/Asakusa Line)",
        image: getImage("Tokyo Skytree and Pokemon Center Japan"),
        activities: [
          { time: "15:00", text: "Check-in at Sumida House", details: "Code is 4492. Wifi: SumidaGuest/welcome123" },
          { time: "16:00", text: "Walk to Tokyo Skytree", details: "Visit Solamachi Mall 4F for Pokemon Center. Reservation might be needed for Kirby Café." },
          { time: "19:00", text: "Dinner: Kura Sushi", details: "Download the app beforehand to book a table. Plates are 115 yen." }
        ]
      },
      {
        date: "Dec 18 (Thu)",
        title: "Kamakura Day Trip",
        logistics: "08:00 AM Train: Hikifune → Kamakura",
        image: getImage("Great Buddha of Kamakura Kotoku-in"),
        activities: [
          { time: "Morning", text: "Kotoku-in (Great Buddha)", details: "200 yen extra to go inside the statue structure." },
          { time: "Lunch", text: "Komachi-dori Street Food", details: "Try the purple yam soft serve and croquettes." },
          { time: "Afternoon", text: "Enoshima Island", details: "Take the Enoden retro train. Use the escalators (paid) to go up to the Sea Candle." }
        ]
      },
      {
        date: "Dec 19 (Fri)",
        title: "Digital Art & Giant Robots",
        logistics: "Train to Toyosu (Leave by 9:00 AM)",
        image: getImage("TeamLab Planets Tokyo Water"),
        activities: [
          { time: "10:00", text: "TeamLab Planets", details: "Wear shorts that can roll up (knee deep water). Lockers provided for shoes." },
          { time: "Lunch", text: "Toyosu Market", details: "Sushi Dai is famous but long wait. Try the 3rd floor restaurants for quicker seating." },
          { time: "Afternoon", text: "Odaiba: Unicorn Gundam", details: "Transformation show happens at 11:00, 13:00, 15:00, 17:00." },
          { time: "Evening", text: "Joypolis", details: "Indoor coasters. Good for rainy days. Last entry 20:15." }
        ]
      },
      {
        date: "Dec 20 (Sat)",
        title: "Samurai & Neon Lights",
        logistics: "Subway to Shinjuku/Shibuya",
        image: getImage("Shibuya Crossing Neon Lights Night"),
        activities: [
          { time: "Morning", text: "Samurai Ninja Museum", details: "Located in Shinjuku. Includes basic armor try-on." },
          { time: "14:00", text: "Shinjuku: Giant 3D Cat", details: "East Exit of Shinjuku Station. Walk to Omoide Yokocho (Piss Alley) for photos." },
          { time: "18:00", text: "Shibuya Crossing", details: "Best view from Magnet by Shibuya 109 rooftop or Starbucks Tsutaya." }
        ]
      },
      {
        date: "Dec 21 (Sun)",
        title: "Old Tokyo & Akihabara",
        logistics: "Local Train: Asakusa Line",
        image: getImage("Akihabara Pedestrian Paradise Sunday"),
        activities: [
          { time: "08:30", text: "Senso-ji Temple", details: "Draw an Omikuji (fortune). If bad, tie it to the rack." },
          { time: "10:00", text: "Sumida River Walk", details: "Cross from Asakusa to Skytree side via the railway bridge walkway." },
          { time: "13:00", text: "Ueno Park & Ameyoko", details: "Great place to buy cheap snacks and shoes." },
          { time: "15:00", text: "Akihabara", details: "Chuo-dori street closes to cars on Sundays 13:00-17:00. Visit Super Potato for retro games." }
        ]
      },
      {
        date: "Dec 22 (Mon)",
        title: "Harajuku & Luggage",
        logistics: "SHIP LUGGAGE TO OSAKA TODAY (Use 7-11 Takkyubin)",
        image: getImage("Harajuku Takeshita Street Crepes"),
        activities: [
          { time: "Morning", text: "Drop bags at 7-11", details: "Fill out Yamato Transport waybill. Address: Konohana Airbnb." },
          { time: "11:00", text: "Harajuku: Takeshita Street", details: "Famous for Marion Crepes and Calbee+ fresh chips." },
          { time: "13:00", text: "Meiji Jingu Shrine", details: "A quiet forest in the city. Sake barrels are near the entrance." }
        ]
      }
    ]
  },
  osaka: {
    id: 'osaka',
    label: 'Osaka',
    title: "Part 2: The Osaka Base",
    base: "Konohana Airbnb (USJ Area)",
    theme: {
      bg: "bg-red-600",
      border: "border-red-600",
      text: "text-red-600",
      lightBg: "bg-red-50"
    },
    days: [
      {
        date: "Dec 23 (Tue)",
        title: "Bullet Train & Takoyaki",
        logistics: "Shinkansen → Shin-Osaka → Konohana",
        image: getImage("Osaka Dotonbori Glico Man Sign"),
        activities: [
          { time: "Morning", text: "Shinkansen to Osaka", details: "Buy Bento at Tokyo station (Ekiben) before boarding. Sit on right side for Mt Fuji view." },
          { time: "Lunch", text: "Takoyaki Museum", details: "Located in Universal Citywalk. Compare 5 different famous vendors." },
          { time: "Afternoon", text: "Osaka Castle Hike", details: "Elevator available. Museum inside details the siege of Osaka." },
          { time: "Evening", text: "Dotonbori", details: "Take photo with Glico Man. Eat 10-yen coin cheese pancake." }
        ]
      },
      {
        date: "Dec 24 (Wed)",
        title: "Universal Studios (Xmas Eve)",
        logistics: "07:30 Rope Drop (Walk to Gate)",
        image: getImage("Universal Studios Japan Flying Dinosaur Coaster"),
        activities: [
          { time: "07:30", text: "Rope Drop", details: "Run straight to Flying Dinosaur or Hollywood Dream depending on wait times." },
          { time: "09:30", text: "Super Nintendo World", details: "Timed Entry Ticket Required (use App). Buy Power Band at kiosk." },
          { time: "18:30", text: "Harry Potter Area", details: "Butterbeer is available in frozen or hot. Castle walk-through is separate from ride." },
          { time: "19:00", text: "Hogwarts Winter Magic", details: "Projection mapping show on the castle." }
        ]
      },
      {
        date: "Dec 25 (Thu)",
        title: "Kyoto Christmas",
        logistics: "Train: Nishikujo → Kyoto Stn",
        image: getImage("Fushimi Inari Shrine Torii Gates"),
        activities: [
          { time: "Morning", text: "Fushimi Inari", details: "The higher you hike, the fewer people. 1 hour to the crossroads." },
          { time: "Lunch", text: "Nishiki Market", details: "Known as Kyoto's Kitchen. Try the soy milk donuts and egg skewers." },
          { time: "Evening", text: "German Christmas Market", details: "At Umeda Sky Building. Gluhwein and sausages." }
        ]
      },
      {
        date: "Dec 26 (Fri)",
        title: "Kyoto Nature",
        logistics: "Train to Arashiyama",
        image: getImage("Arashiyama Bamboo Grove Kyoto"),
        activities: [
          { time: "08:00", text: "Bamboo Grove", details: "Go immediately upon arrival for empty photos." },
          { time: "10:00", text: "Monkey Park Iwatayama", details: "20 min steep hike up. Do not look monkeys in the eye." },
          { time: "Afternoon", text: "Kinkaku-ji", details: "The Golden Pavilion reflects beautifully in the pond. One way path." }
        ]
      },
      {
        date: "Dec 27 (Sat)",
        title: "Nara Deer Trip",
        logistics: "Direct Rapid Train: Nishikujo → Nara",
        image: getImage("Nara Park Deer Japan"),
        activities: [
          { time: "Morning", text: "Nara Park", details: "Deer bow for crackers. Warning: they can bite and headbutt." },
          { time: "Visit", text: "Todai-ji", details: "Houses the world's largest bronze Buddha statue." },
          { time: "Lunch", text: "Nakatanidou", details: "Watch the high-speed mochi pounding demo." },
          { time: "Evening", text: "Shinsekai", details: "Old school Osaka vibe. Eat Kushikatsu (fried skewers) at Daruma." }
        ]
      },
      {
        date: "Dec 28 (Sun)",
        title: "Himeji Castle",
        logistics: "Train to Himeji",
        image: getImage("Himeji Castle White Heron"),
        activities: [
          { time: "Morning", text: "Himeji Castle", details: "UNESCO site. Steep stairs inside, must remove shoes." },
          { time: "Afternoon", text: "Souvenir Shopping", details: "Don Quijote for tax-free snacks and cosmetics." },
          { time: "Dinner", text: "Yakiniku Party", details: "All you can eat grilled meat to celebrate the end of Osaka leg." }
        ]
      }
    ]
  },
  finale: {
    id: 'finale',
    label: 'Finale',
    title: "Part 3: The Finale",
    base: "Prince Sakura Tower (Shinagawa)",
    theme: {
      bg: "bg-purple-600",
      border: "border-purple-600",
      text: "text-purple-600",
      lightBg: "bg-purple-50"
    },
    days: [
      {
        date: "Dec 29 (Mon)",
        title: "Return to Tokyo",
        logistics: "Shinkansen → Shinagawa",
        image: getImage("Togoshi Ginza Shotengai Street Food"),
        activities: [
          { time: "Morning", text: "Ship luggage", details: "Send heavy bags directly to Airport (Yamato) for next day pickup." },
          { time: "12:30", text: "Check-in Prince Sakura", details: "Luxury hotel with a massive Japanese garden." },
          { time: "13:30", text: "Togoshi Ginza", details: "Longest shopping street in Tokyo. Very local vibe." },
          { time: "16:00", text: "Sengaku-ji", details: "Resting place of the 47 Ronin. Atmospheric and quiet." }
        ]
      },
      {
        date: "Dec 30 (Tue)",
        title: "Departure",
        logistics: "Train to Haneda/Narita",
        image: getImage("Japanese Hotel Garden Tea"),
        activities: [
          { time: "Morning", text: "Hotel Garden Walk", details: "Enjoy the peaceful garden one last time." },
          { time: "Flight", text: "Fly Home safe!", details: "Arrive at airport 3 hours early. Spend leftover coins in Gachapon machines." }
        ]
      }
    ]
  }
};

export const CHECKLIST_ITEMS = [
  "Book TeamLab Planets (Oct/Nov)",
  "Book USJ Express Pass (Oct 24)",
  "Book Samurai Museum (Nov)",
  "Download 'Japan Travel by Navitime'",
  "Buy Deer Crackers in Nara!"
];