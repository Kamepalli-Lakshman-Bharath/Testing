import Greetings from "@/components/Greeting";
import Message from "@/components/Message";

const Homepage = (props) => {
  return (
    <>
      <h1 className="text-[32px] text-blue-500 underline font-bold text-center">
        This is home Page
      </h1>
      <Message/>
      <Greetings/>
    </>
  );
};
export default Homepage;
