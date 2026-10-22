import pastries from "@/data/projects/pastries";
import pride from "@/data/projects/pride";
import type { PrideCaseStudy } from "@/data/projects/types";
import hero from "@/assets/pride/1-hero.jpg";
import hottestTracks from "@/assets/pride/2-hottest-tracks.jpg";
import musicLibraries from "@/assets/pride/3-music-libraries.jpg";
import trendingArtists from "@/assets/pride/4-trending-artists.jpg";
import artistSpotlight from "@/assets/pride/5-artist-spotlight.jpg";
import newsletter from "@/assets/pride/6-newsletter.jpg";
import colorLibrary from "@/assets/pride/color-library.jpg";
import typography from "@/assets/pride/typography.jpg";

const prideCaseStudy: PrideCaseStudy = {
  project: pride,
  intro: "A landing page for a music streaming brand made for the party crowd.",
  details: [
    { label: "Role", value: "UI/UX Designer" },
    { label: "Type", value: "Concept" },
    { label: "Format", value: "Landing Page" },
  ],
  set: {
    eyebrow: "The set",
    headline: "Open loud, build, drop, then ask.",
    body: "Paced like a night out: a loud open, a build, a drop, then the ask.",
  },
  tracks: [
    {
      title: "Music Without Limits",
      job: "Says the one thing that matters, ad-free, and asks for a sign-up straight away.",
      tag: "Hero",
      beat: "Open loud",
      screen: {
        src: hero,
        alt: "Pride's hero: Music Without Limits, with a Sign up button, beside a woman in headphones lit pink and blue",
      },
    },
    {
      title: "The Hottest Tracks of the Week",
      job: "Proof that there's something worth hearing right now.",
      tag: "Weekly tracks",
      beat: "Warm up",
      screen: {
        src: hottestTracks,
        alt: "The Hottest Tracks of the Week: Only on Pride, with three track cards: Island by Mark Brandon, Be Yourself by Aurora Diane and Rock'N Roll by The Band",
      },
    },
    {
      title: "Explore Endless Music Libraries",
      job: "Genres to browse: Hip Hop, Soul, Summer Hits, R&B.",
      tag: "Library",
      beat: "Build",
      screen: {
        src: musicLibraries,
        alt: "Explore Endless Music Libraries, with a card for each genre: Hip Hop, Soul, Summer Hits and R&B",
      },
    },
    {
      title: "Trending Artists",
      job: "Faces to follow, from emerging talent to established stars.",
      tag: "Trending artists",
      beat: "Build",
      screen: {
        src: trendingArtists,
        alt: "Trending Artists: five artist cards, from Luna Blaze to Nova Star, and a See All (374) button",
      },
    },
    {
      title: "Ariana Daze",
      job: "One artist up close, with her latest songs on the side.",
      tag: "Artist album",
      beat: "Drop",
      screen: {
        src: artistSpotlight,
        alt: "Ariana Daze, Only on Pride: her portrait beside a list of her latest songs, each with a play button",
      },
    },
    {
      title: "Don't Miss a Beat",
      job: "The last ask: subscribe, and a second sign-up button.",
      tag: "Call to action",
      beat: "Ask",
      screen: {
        src: newsletter,
        alt: "Don't Miss a Beat! A magenta newsletter banner with an email field, a Subscribe button and a pair of headphones",
      },
    },
  ],
  linerNotes: {
    eyebrow: "Liner notes",
    headline: "Made for 16 to 26 year olds who live for the weekend.",
    body: "Dance, Hip-Hop, Rock and R&B fans, confident with tech and browsing on desktop. A colour library and type system give Pride a bold, nightlife identity.",
    images: [
      {
        src: colorLibrary,
        alt: "Pride's colour library: Primary Dark, Primary Red, Secondary Violet, Secondary Pink, Secondary Blue, Light Dark, Dark Grey, Blue Grey, Pink Grey, Grey, Light Grey and White",
      },
      {
        src: typography,
        alt: "Pride's typography: H1 to H4 headings in a bold, rounded typeface",
      },
    ],
  },
  next: pastries,
};

export default prideCaseStudy;
