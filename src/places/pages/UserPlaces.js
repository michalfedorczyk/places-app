import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import "./UserPlaces.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "Best building ever!",
    imageUrl: "https://source.unsplash.com/random",
    address: "Bisztynek",
    creator: "u1",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    id: "p2",
    title: "Pałac Kultury",
    description: "Second best building ever!",
    imageUrl: "https://source.unsplash.com/random",
    address: "Warszawa",
    creator: "u2",
    location: {
      lat: 51.7884405,
      lng: -85.9878584,
    },
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
