import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Raime",
      word1: "Seaford",
      word2: "Andrew",
      word3: "bigguhuggubiggudoggu",
      word4: "artist",
      word5: "39",
      word6: "...so I must.",
    },
    {
      id: 2,
      author: "Andrew",
      word1: "Porto",
      word2: "Raime",
      word3: "huck'n'yuck",
      word4: "artist",
      word5: "27",
      word6: "...so I must.",
    },
  ]);
  const addStory = (story: Story): void => {
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
