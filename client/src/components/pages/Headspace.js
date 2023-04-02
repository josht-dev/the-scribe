import React, { useState } from "react";

const headspaceArray = [
  // Empty Array Item for Seeds
  //! CreatedAt?
  {
    _id: "0",
    title: "",
    subject: "",
    body: "",
    username: "",
    comments: [
      {
        _id: "C0",
        commentBody: "",
        commentWriter: "",
      },
    ],
    category: "",
  },
  {
    _id: "1",
    title: "Can I get some help with loot distribution?",
    subject: "",
    body: "Here is a post from a GM. Seeks advice or help on their story, player situations, or practically anything else related to running tabletop RPGs.",
    username: "JoshT-Dev",
    comments: [
      {
        _id: "C1",
        commentBody: "Wow, you can comment on Posts, too!",
        commentWriter: "artiecannv",
      },
    ],
    category: "",
  },
  {
    _id: "2",
    title: "New Player Chacters",
    subject: "",
    body: "Using the post system to show off the new charcter models I've made.",
    username: "randomguy21",
    comments: [
      {
        _id: "C2",
        commentBody: "Cool concepts man",
        commentWriter: "bartjackson6",
      },
    ],
    category: "",
  },
  {
    _id: "3",
    title: "Lorem Ipsum",
    subject: "",
    body: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    username: "bartjackson6",
    comments: [
      {
        _id: "C3",
        commentBody: "Cool!",
        commentWriter: "randomguy21",
      },
    ],
    category: "",
  },
  {
    _id: "4",
    title: "Curabitur Vitae Nunc",
    subject: "",
    body: "Fermentum et sollicitudin ac orci phasellus egestas tellus. Nunc sed blandit libero volutpat sed cras.",
    username: "artiecannv",
    comments: [
      {
        _id: "C4",
        commentBody: "First Post",
        commentWriter: "Josht-GM",
      },
    ],
    category: "",
  },
  {
    _id: "5",
    title: "Placeholder Post",
    subject: "",
    body: "Let's see if I can actually get these to pull up on the modal",
    username: "thequeen",
    comments: [
      {
        _id: "C5",
        commentBody: "... is that the queen?",
        commentWriter: "abritishguy",
      },
    ],
    category: "",
  },
];

export default function Headspace() {}
