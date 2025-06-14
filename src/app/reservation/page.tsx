"use client"
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Lable from "@/components/layout/Lable";
import Suscribe from "@/components/layout/Suscribe";
import ReservationPage from "@/components/pages/Reservation";

export default function Page() {
  return (
    <div>
      <Header />
      <Lable lableName="Reservation"/>
      <ReservationPage/>
      <Suscribe/>
      <Footer />
    </div>
  );
}
