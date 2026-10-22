import hiringCaseStudy from "@/data/caseStudies/hiringTracker";
import Question from "./Question";

const { questions } = hiringCaseStudy;

// The three questions in the order a recruiter asks them, on alternating tinted and white bands
const Questions = () => {
  return (
    <>
      {questions.map((question, index) => (
        <Question
          key={question.headline}
          question={question}
          number={index + 1}
          total={questions.length}
        />
      ))}
    </>
  );
};

export default Questions;
