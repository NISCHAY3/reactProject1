import Stats from "./Stats";
import Bussiness from "./Bussiness";
import Billing from "./Billing";
import CardsDeal from "./CardsDeal";
import Feedback from "./Feedback";
import Client from "./Clients";
import CTA from "./CTA";
import Footer from "./footer";

export default function Information() {
  return (
    <div className="mx-auto flex flex-col justify-center w-[70%] gap-[80px]">
      <Stats></Stats>
      <Bussiness></Bussiness>
      <Billing></Billing>
      <CardsDeal></CardsDeal>
      <Feedback></Feedback>
      <Client></Client>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}
