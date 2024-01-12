import Header from "widgets/header";
import Greetings from "components/Greeting";
import Message from "components/Message";

export default function Aboutpage() {
  return (
    <>
      <h1 className="text-[32px] text-blue-500 underline font-bold text-center">
        This is About page
      </h1>
      <Message mes={"welcome to about page"} />
      <Greetings />
      <Header />
    </>
  );
}
