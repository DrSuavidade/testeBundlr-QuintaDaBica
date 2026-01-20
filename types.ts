
export interface Wine {
  id: string;
  name: string;
  vintage: string;
  region: string;
  type: 'Red' | 'White' | 'Rosé' | 'Sparkling';
  price: number;
  description: string;
  tastingNotes: string;
  blend: string;
  servingTemp: string;
  aging: string;
  awards: string[];
  imageUrl: string;
  bottleImageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  price: number;
  description: string;
  image: string;
}

export interface Booking {
  type: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
}
