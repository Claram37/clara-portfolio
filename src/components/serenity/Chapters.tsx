import serenityCaseStudy from "@/data/caseStudies/serenity";
import Chapter from "./Chapter";

const { chapters } = serenityCaseStudy;

interface ChaptersProps {
  story: string; // the first chapter's id, for Play the story
}

// The page has darkened by the second line, so the text turns from ink to white
const Chapters = ({ story }: ChaptersProps) => {
  return (
    <>
      {chapters.map((chapter, index) => (
        <Chapter
          key={chapter.line}
          chapter={chapter}
          id={index === 0 ? story : undefined}
          dusk={index === 0}
        />
      ))}
    </>
  );
};

export default Chapters;
