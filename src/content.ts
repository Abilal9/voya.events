/**
 * Website copy and curated screen selection.
 * Screens are exported from the approved Voya Design V1 frames (no invented UI).
 */
import home from './assets/screens/home.webp';
import exploreCards from './assets/screens/explore-cards.webp';
import exploreMap from './assets/screens/explore-map.webp';
import placeDetails from './assets/screens/place-details.webp';
import tripPickPlaces from './assets/screens/trip-pick-places.webp';
import tripItinerary from './assets/screens/trip-itinerary.webp';
import tripOverview from './assets/screens/trip-overview.webp';
import tripToday from './assets/screens/trip-today.webp';
import hangoutChoose from './assets/screens/hangout-choose.webp';
import hangoutSuggestions from './assets/screens/hangout-suggestions.webp';
import hangoutTimeline from './assets/screens/hangout-timeline.webp';
import eventHost from './assets/screens/event-host.webp';
import eventInvitation from './assets/screens/event-invitation.webp';
import eventRsvp from './assets/screens/event-rsvp.webp';
import eventGuests from './assets/screens/event-guests.webp';
import type { IconName } from './components/Icon';

export interface Screen {
  src: string;
  alt: string;
}

export const screens = {
  home: { src: home, alt: 'Voya Home screen showing a Friday Night hangout up next, plus an upcoming wedding and a Florence trip' },
  exploreCards: { src: exploreCards, alt: 'Explore screen with a picked-for-you restaurant card and Not for me, Save and I like this buttons' },
  exploreMap: { src: exploreMap, alt: 'Explore map view of Riyadh with place pins and a preview card' },
  placeDetails: { src: placeDetails, alt: 'Place details for a restaurant, with why you will like it and an Add to Plan button' },
  tripPickPlaces: { src: tripPickPlaces, alt: 'Trip screen asking travelers to pick the places they love in Florence' },
  tripItinerary: { src: tripItinerary, alt: 'Shared Florence trip itinerary for Day 1, from breakfast to dinner' },
  tripOverview: { src: tripOverview, alt: 'Florence trip overview with travelers, itinerary, must-dos and hotel' },
  tripToday: { src: tripToday, alt: 'Trip Today view showing what is happening now and what is next' },
  hangoutChoose: { src: hangoutChoose, alt: 'Hangout screen where friends choose a dinner spot together' },
  hangoutSuggestions: { src: hangoutSuggestions, alt: 'Dinner ideas suggested by friends, each with votes' },
  hangoutTimeline: { src: hangoutTimeline, alt: 'Final Friday Night timeline with dinner, padel and dessert, and everyone in' },
  eventHost: { src: eventHost, alt: 'Host view of a wedding event with RSVP counts and the evening schedule' },
  eventInvitation: { src: eventInvitation, alt: 'Guest invitation for a wedding with Going, Maybe and Can’t make it options' },
  eventRsvp: { src: eventRsvp, alt: 'RSVP confirmation screen saying You’re going!' },
  eventGuests: { src: eventGuests, alt: 'Event guest list with going, maybe and awaiting counts' },
} satisfies Record<string, Screen>;

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#explore', label: 'Explore Voya' },
  { href: '#features', label: 'Features' },
  { href: '#download', label: 'Download' },
] as const;

export const journey: { icon: IconName; title: string; text: string }[] = [
  { icon: 'compass', title: 'Discover', text: 'Find places, activities and ideas worth experiencing.' },
  { icon: 'vote', title: 'Decide', text: 'Make decisions together, without the endless back-and-forth.' },
  { icon: 'calendar', title: 'Plan', text: 'Bring the details into one shared, organized plan.' },
  { icon: 'sparkles', title: 'Go', text: 'Spend less time coordinating and more time making memories.' },
];

export const pillars: { id: string; icon: IconName; title: string; line: string; tone: 'lavender' | 'peach' | 'plum' }[] = [
  { id: 'trips', icon: 'plane', title: 'Trips', line: 'Plan your next adventure together.', tone: 'lavender' },
  { id: 'hangouts', icon: 'users', title: 'Hangouts', line: 'From “we should do something” to actually doing it.', tone: 'peach' },
  { id: 'events', icon: 'calendar', title: 'Events', line: 'Bring everyone together, effortlessly.', tone: 'plum' },
];

export interface Experience {
  id: 'trips' | 'hangouts' | 'events';
  eyebrow: string;
  title: string;
  intro: string;
  features: { icon: IconName; title: string; text: string }[];
  screens: [Screen, Screen, Screen];
}

export const experiences: Experience[] = [
  {
    id: 'trips',
    eyebrow: 'Trips',
    title: 'Every great adventure starts with a plan worth sharing.',
    intro:
      'Pick a destination and dates, bring your travelers in, and let everyone’s favorites shape one itinerary the whole group can follow.',
    features: [
      { icon: 'mapPin', title: 'Destination & dates', text: 'Start a trip in a few taps and invite your travelers with a link or code.' },
      { icon: 'heart', title: 'Preferences & Must-dos', text: 'Everyone picks the places they love, so the plan reflects the whole group.' },
      { icon: 'route', title: 'Day-by-day itinerary', text: 'Activities arranged into days around opening times and travel distance.' },
      { icon: 'sun', title: 'Today, at a glance', text: 'On the trip, see what’s happening now and what’s up next.' },
    ],
    screens: [screens.tripPickPlaces, screens.tripOverview, screens.tripItinerary],
  },
  {
    id: 'hangouts',
    eyebrow: 'Hangouts',
    title: 'Less “where should we go?” More “see you there.”',
    intro:
      'Decide what kind of night it is, gather ideas from everyone, vote on the options and lock in a plan before the group chat goes quiet.',
    features: [
      { icon: 'compass', title: 'Discover places', text: 'Browse spots picked around what your group already likes.' },
      { icon: 'plus', title: 'Suggest options', text: 'Anyone can add an idea — dinner, an activity, dessert.' },
      { icon: 'vote', title: 'Vote together', text: 'See what’s winning, step by step, without the debate.' },
      { icon: 'checkCircle', title: 'Finalize the plan', text: 'One timeline everyone can see, with who’s in.' },
    ],
    screens: [screens.hangoutSuggestions, screens.hangoutTimeline, screens.hangoutChoose],
  },
  {
    id: 'events',
    eyebrow: 'Events',
    title: 'Bring people together, beautifully.',
    intro:
      'From birthdays to weddings, create a beautiful invitation, share it with your guests and keep every RSVP, detail and schedule in one calm place.',
    features: [
      { icon: 'mail', title: 'Beautiful invitations', text: 'Share an invite guests can answer in a tap: Going, Maybe or Can’t make it.' },
      { icon: 'users', title: 'RSVPs, handled', text: 'See who’s going, who’s maybe and who hasn’t replied yet.' },
      { icon: 'clock', title: 'Schedule & details', text: 'Location, dress code and the running order, all in one place.' },
      { icon: 'calendar', title: 'Co-hosts welcome', text: 'Plan it with the people hosting alongside you.' },
    ],
    screens: [screens.eventInvitation, screens.eventHost, screens.eventRsvp],
  },
];

export const showcase: { screen: Screen; title: string; caption: string }[] = [
  { screen: screens.home, title: 'Home', caption: 'Everything coming up, in one glance.' },
  { screen: screens.exploreCards, title: 'Explore', caption: 'Places picked around what you love.' },
  { screen: screens.exploreMap, title: 'Map', caption: 'See what’s nearby and tap to preview.' },
  { screen: screens.placeDetails, title: 'Place details', caption: 'Why you’ll like it, and add it to a plan.' },
  { screen: screens.tripOverview, title: 'Trip overview', caption: 'Travelers, itinerary and must-dos together.' },
  { screen: screens.tripToday, title: 'Trip · Today', caption: 'What’s now and what’s next.' },
  { screen: screens.hangoutTimeline, title: 'Hangout plan', caption: 'The final plan, and everyone’s in.' },
  { screen: screens.eventInvitation, title: 'Invitation', caption: 'An invite worth opening.' },
  { screen: screens.eventGuests, title: 'Guest list', caption: 'Every RSVP, organized.' },
];

export const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: 'layers', title: 'Everything in one place', text: 'No more digging through messages, saved links and separate notes to find the plan.' },
  { icon: 'users', title: 'Better together', text: 'Everyone gets a say, and everyone sees the same plan — not five versions of it.' },
  { icon: 'compass', title: 'Discover more', text: 'Find new places and experiences that match what you and your friends enjoy.' },
  { icon: 'sparkles', title: 'Less coordination', text: 'Fewer “so what’s the plan?” messages. More actually going.' },
];

export const groupChatVsVoya = {
  before: ['Links lost somewhere up the thread', '“Who’s actually coming?”, asked again', 'Ten opinions, no decision', 'Details spread across apps and notes'],
  after: ['Ideas saved to one shared plan', 'Clear RSVPs and who’s in', 'Quick votes that settle it', 'Times, places and people together'],
};

export const supportEmail = 'support@voya.events';
